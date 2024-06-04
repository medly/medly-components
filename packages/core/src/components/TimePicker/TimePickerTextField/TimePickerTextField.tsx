import { AccessTimeIcon } from '@medly-components/icons';
import { WithStyle, useCombinedRefs } from '@medly-components/utils';
import type { ChangeEvent, FC, FocusEvent } from 'react';
import { forwardRef, memo, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { PopoverContext } from '../../Popover/Popover.context';
import TextField from '../../TextField';
import { TimePickerTextFieldProps } from './types';

const Component: FC<TimePickerTextFieldProps> = memo(
    forwardRef((props, ref) => {
        const [key, setKey] = useState(0);
        const [text, setText] = useState<string>('');
        const [isDialogOpen] = useContext(PopoverContext);
        const inputRef = useCombinedRefs<HTMLInputElement>(ref, useRef(null));

        const validator = useCallback(
            (value: string, event: ChangeEvent<HTMLInputElement>) => {
                if (value !== '' && !isDialogOpen) {
                    const validatorMessage: string = (props.validator && props.validator(value, event)) || '';
                    const message: string = props.validator ? validatorMessage : (inputRef.current?.validationMessage as string);
                    return message;
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
                event.target.value.length < 11 && props.onChange?.('');
            }
        };

        const onChange = (event: ChangeEvent<HTMLInputElement>) => {
            setText(event.target.value);
            if (event.target.value.length === 11) {
                const [hour, , minutes, , period] = event.target.value.split(' ');
                props.onChange?.(period.toUpperCase() === 'AM' ? `${hour}:${minutes}` : `${Number(hour) + 12}:${minutes}`);
            }
        };

        useEffect(() => {
            if (props.value) {
                const time = (props.value as string).split(':');
                const hour = Number(time[0]);
                const minutes = Number(time[1]);
                const period = hour < 12 ? 'AM' : 'PM';
                setText(`${`0${hour % 12}`.slice(-2)} : ${`0${minutes}`.slice(-2)}  ${period}`);
                !isDialogOpen && setKey(key => key + 1);
            }
        }, [props.value]);

        useEffect(() => {
            !isDialogOpen && inputRef?.current?.blur();
        }, [isDialogOpen]);

        return (
            <TextField
                fullWidth
                mask="HH : MM  AM"
                ref={inputRef}
                suffix={AccessTimeIcon}
                key={key.toString()}
                pattern={'[0-1]{1}[0-9]{1} : [0-5]{1}[0-9]{1}  [AaPp][Mm]'}
                {...{ ...props, value: text, onBlur, validator, onChange }}
            />
        );
    })
);
Component.displayName = 'TimePickerTextField';
export const TimePickerTextField: FC<TimePickerTextFieldProps> & WithStyle = Object.assign(Component, { Style: TextField.Style });
