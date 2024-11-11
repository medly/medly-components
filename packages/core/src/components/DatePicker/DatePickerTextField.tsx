import { DateRangeIcon } from '@medly-components/icons';
import { getFormattedDate, parseToDate, useCombinedRefs, useRunAfterUpdate } from '@medly-components/utils';
import { format } from 'date-fns';
import type { FC } from 'react';
import React, { forwardRef, memo, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { PopoverContext } from '../Popover/Popover.context';
import TextField from '../TextField';
import { DateIconWrapper } from './DatePicker.styled';
import datePickerPattern from './datePickerPattern';
import { DatePickerProps } from './types';

export const DatePickerTextField: FC<
    DatePickerProps & { builtInErrorMessage: string; setErrorMessage: React.Dispatch<React.SetStateAction<string>> }
> = memo(
    forwardRef((props, ref) => {
        const {
                value,
                onChange,
                size,
                displayFormat,
                minWidth,
                required,
                disabled,
                showDecorators,
                errorText,
                validator,
                minSelectableDate,
                maxSelectableDate,
                showCalendarIcon,
                calendarIconPosition,
                valueFormatter,
                onChangeFormatter,
                builtInErrorMessage,
                setErrorMessage,
                ...restProps
            } = props,
            id = props.id || props.label?.toLowerCase().replace(/\s/g, '') || 'medly-datepicker', // TODO:- Remove static ID concept to avoid dup ID
            date: Date | null = useMemo(
                () =>
                    valueFormatter
                        ? valueFormatter(value)
                        : value instanceof Date
                        ? value
                        : typeof value === 'string'
                        ? parseToDate(value, displayFormat!)
                        : null,
                [value, displayFormat]
            );

        const inputRef = useCombinedRefs<HTMLInputElement>(ref, useRef(null)),
            runAfterUpdate = useRunAfterUpdate(),
            [textValue, setTextValue] = useState(''),
            [isCalendarOpen] = useContext(PopoverContext),
            isErrorPresent = useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]),
            mask = displayFormat!.replace(new RegExp('\\/|\\-', 'g'), ' $& ').toUpperCase();

        useEffect(() => {
            if (date) {
                const cursor = inputRef.current?.selectionStart || 0;
                setTextValue(format(date, displayFormat!).replace(new RegExp('\\/|\\-', 'g'), ' $& '));
                runAfterUpdate(() => inputRef.current?.setSelectionRange(cursor, cursor));
            } else if (!isErrorPresent && !isCalendarOpen) {
                setTextValue('');
            }
        }, [date, isErrorPresent, displayFormat]);
        const onTextChange = useCallback(
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    const inputValue = event.target.value || '',
                        cursor = event.target.selectionStart || 0,
                        parsedDate = parseToDate(inputValue, displayFormat!),
                        isValidDate = parsedDate?.toString() !== 'Invalid Date';

                    onChange(isValidDate ? (onChangeFormatter ? onChangeFormatter(parsedDate) : parsedDate) : null);

                    const breakdown = getFormattedDate(inputValue, displayFormat!);
                    if (breakdown) {
                        setTextValue(breakdown);
                        event.target.maxLength = mask!.length;
                    } else {
                        setTextValue(inputValue);
                        event.target.maxLength = mask!.length + 1;
                    }

                    runAfterUpdate(() => event.target?.setSelectionRange(cursor, cursor));
                    isValidDate && validate(event);
                },
                [displayFormat, onChange]
            ),
            validate = useCallback(
                (event: React.ChangeEvent<HTMLInputElement>, eventFunc?: any) => {
                    const inputValue = inputRef.current?.value,
                        parsedDate = inputValue && parseToDate(inputValue, displayFormat!),
                        isValidDate = parsedDate?.toString() !== 'Invalid Date',
                        emptyDateMessage = props.required && !inputValue && 'Please fill in this field',
                        invalidDateRangeMessage =
                            (parsedDate! < minSelectableDate! || parsedDate! > maxSelectableDate!) &&
                            'Please select date from allowed range',
                        invalidDateMessage = inputValue && !isValidDate && 'Please enter a valid date',
                        validatorMessage = validator && validator(parsedDate || null, event),
                        message = validatorMessage || emptyDateMessage || invalidDateRangeMessage || invalidDateMessage || '';

                    setErrorMessage(message);
                    inputRef.current?.setCustomValidity(message);
                    eventFunc && eventFunc(event);
                },
                [props.required, displayFormat, validator, minSelectableDate, maxSelectableDate]
            ),
            onBlur = useCallback(
                (event: React.FocusEvent<HTMLInputElement>) => {
                    if (isCalendarOpen) {
                        inputRef?.current?.focus();
                    } else {
                        validate(event, props.onBlur);
                        inputRef?.current?.blur();
                    }
                },
                [isCalendarOpen, props.onBlur, displayFormat]
            ),
            onInvalid = useCallback(
                (event: React.ChangeEvent<HTMLInputElement>) => validate(event, props.onInvalid),
                [props.onInvalid, displayFormat]
            ),
            inputValidator = useCallback(() => '', []),
            onKeyPress = useCallback(
                (event: React.KeyboardEvent) => {
                    const regex = displayFormat?.includes('/') ? /[0-9/]+/g : /[0-9-]+/g;
                    if (!regex.test(event.key)) {
                        event.preventDefault();
                    }
                },
                [displayFormat]
            );

        useEffect(() => {
            !isCalendarOpen && setTimeout(() => inputRef.current?.blur(), 0);
        }, [isCalendarOpen]);

        const dateIconEl = useCallback(
            () => (
                <DateIconWrapper
                    variant={restProps.variant!}
                    isErrorPresent={isErrorPresent}
                    isActive={isCalendarOpen}
                    disabled={disabled}
                    size={size}
                >
                    <DateRangeIcon id={`${id}-calendar-icon`} title={`${id}-calendar-icon`} size={size} />
                </DateIconWrapper>
            ),
            [restProps.variant, isErrorPresent, isCalendarOpen, disabled, size, id]
        );

        return (
            <TextField
                errorText={errorText || builtInErrorMessage}
                id={id}
                ref={inputRef}
                required={required}
                {...(showCalendarIcon && (calendarIconPosition === 'left' ? { prefix: dateIconEl } : { suffix: dateIconEl }))}
                mask={mask}
                pattern={datePickerPattern[displayFormat!]}
                size={size}
                disabled={disabled}
                showDecorators={showDecorators}
                value={textValue}
                onChange={onTextChange}
                validator={inputValidator}
                onKeyPress={onKeyPress}
                maxLength={mask!.length}
                onClick={event => isCalendarOpen && event.stopPropagation()}
                {...{ ...restProps, fullWidth: true, onBlur, minWidth, onInvalid }}
            />
        );
    })
);
DatePickerTextField.displayName = 'DatePickerTextField';
