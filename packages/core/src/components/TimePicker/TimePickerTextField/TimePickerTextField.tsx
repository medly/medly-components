import { WithStyle, useCombinedRefs, useRunAfterUpdate } from '@medly-components/utils';
import type { ChangeEvent, FC, FocusEvent } from 'react';
import { forwardRef, memo, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { PopoverContext } from '../../Popover/Popover.context';
import TextField from '../../TextField';
import { TimeIcon } from '../TimePicker.styled';
import { TimePickerTextFieldProps } from './types';

const Component: FC<TimePickerTextFieldProps> = memo(
    forwardRef((props, ref) => {
        const [key, setKey] = useState(0);
        const [text, setText] = useState<string>('');
        const [isDialogOpen] = useContext(PopoverContext);
        const runAfterUpdate = useRunAfterUpdate();
        const inputRef = useCombinedRefs<HTMLInputElement>(ref, useRef(null));

        const validator = useCallback(
            (value: string, event: ChangeEvent<HTMLInputElement>) => {
                const outOfRangeMessage = 'Time must be within the valid range of 12:00 AM to 11:59 PM';
                const defaultValidationMessage = event.target.validationMessage;

                if (props.validator && props.validator(value, event)) {
                    return props.validator(value, event);
                }

                const [hour, , minutes] = event.target.value.split(' ');
                if ((hour && (hour < '01' || hour > '12')) || (minutes && (minutes < '00' || minutes > '59'))) {
                    return 'Time must be within the valid range of 12:00 AM to 11:59 PM';
                }

                if (defaultValidationMessage !== outOfRangeMessage) {
                    return defaultValidationMessage;
                }

                return '';
            },
            [props.validator, isDialogOpen]
        );

        const onBlur = (event: FocusEvent<HTMLInputElement>) => {
            if (isDialogOpen) {
                inputRef?.current?.focus();
            } else {
                inputRef?.current?.blur();
                props?.onBlur?.(event);
                const { length } = event.target.value;
                const match = event.target.value.replace(/ /g, '').match(/([0-9]{2}):([0-9]{2})$/);
                // Choose AM as default if user has not entered any value for period
                if (length >= 7 && match) {
                    const [, hour, minutes] = match;
                    if (hour > '00' && hour <= '12' && minutes >= '00' && minutes <= '59') {
                        props.onChange?.(`${`0${Number(hour) % 12}`.slice(-2)}:${minutes}`);
                        setText(`${`0${hour}`.slice(-2)} : ${`0${minutes}`.slice(-2)}  AM`);
                        setKey(key => key + 1);
                    }
                } else if (length < 7) {
                    props.onChange?.('');
                }
            }
        };

        const onChange = (event: ChangeEvent<HTMLInputElement>) => {
            const inputValue = event.target.value;
            const cursor = event.target.selectionStart || 0;
            setText(inputValue);
            if (inputValue.length >= 7 && inputRef.current) {
                const match = inputValue.replace(/ /g, '').match(/([0-9]{2}):([0-9]{2})([a-zA-Z]{2})/);
                if (match) {
                    const [, hour, minutes, period] = match;
                    if (
                        hour > '00' &&
                        hour <= '12' &&
                        minutes >= '00' &&
                        minutes <= '59' &&
                        (period.toUpperCase() === 'AM' || period.toUpperCase() === 'PM')
                    ) {
                        props.onChange?.(
                            period.toUpperCase() === 'AM'
                                ? `${`0${Number(hour) % 12}`.slice(-2)}:${minutes}`
                                : `${(Number(hour) % 12) + 12}:${minutes}`
                        );
                    } else {
                        props.onChange?.('');
                    }
                    const updatedText = `${`0${hour}`.slice(-2)} : ${`0${minutes}`.slice(-2)} ${period}`;
                    if (inputValue!.length !== updatedText.length) {
                        runAfterUpdate(() => inputRef.current?.setSelectionRange(cursor, cursor));
                    }
                    setText(updatedText);
                    return;
                }
            }
        };

        const onKeyPress = (event: React.KeyboardEvent) => {
            const target = event.target as HTMLInputElement;
            const count = target.value.includes(' ') ? 6 : 5;
            const regex = (target.selectionStart || 0) > count ? /[aApPmM]+/g : /[0-9:]+/g;
            if (!regex.test(event.key)) {
                event.preventDefault();
            }
        };

        useEffect(() => {
            if (props.value) {
                const time = (props.value as string).split(':');
                const hour = Number(time[0]);
                const minutes = Number(time[1]);
                const period = hour < 12 ? 'AM' : 'PM';
                setText(`${`0${hour % 12 === 0 ? 12 : hour % 12}`.slice(-2)} : ${`0${minutes}`.slice(-2)} ${period}`);
                inputRef.current?.setCustomValidity('');
                inputRef.current?.blur();
            }
        }, [props.value]);

        useEffect(() => {
            !isDialogOpen && inputRef?.current?.blur();
        }, [isDialogOpen]);

        return (
            <TextField
                fullWidth
                mask="HH : MM AM"
                ref={inputRef}
                suffix={TimeIcon}
                onKeyPress={onKeyPress}
                key={key.toString()}
                maxLength={11}
                autoComplete="off"
                pattern={'[0-9]{2} : [0-9]{2} [AaPp][Mm]'}
                {...{ ...props, value: text, onBlur, validator, onChange }}
            />
        );
    })
);
Component.displayName = 'TimePickerTextField';
export const TimePickerTextField: FC<TimePickerTextFieldProps> & WithStyle = Object.assign(Component, { Style: TextField.Style });
