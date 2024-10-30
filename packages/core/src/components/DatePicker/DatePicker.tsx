import { DateRangeIcon } from '@medly-components/icons';
import {
    getFormattedDate,
    parseToDate,
    useCombinedRefs,
    useOuterClickNotifier,
    useRunAfterUpdate,
    WithStyle
} from '@medly-components/utils';
import { format } from 'date-fns';
import type { FC } from 'react';
import React, { forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Calendar from '../Calendar';
import TextField from '../TextField';
import { DateIconWrapper, Wrapper } from './DatePicker.styled';
import datePickerPattern from './datePickerPattern';
import { DatePickerProps } from './types';

const Component: FC<DatePickerProps> = memo(
    forwardRef((props, ref) => {
        const {
                value,
                onChange,
                size,
                displayFormat,
                fullWidth,
                minWidth,
                required,
                disabled,
                showDecorators,
                errorText,
                className,
                validator,
                popoverPlacement,
                minSelectableDate,
                maxSelectableDate,
                showCalendarIcon,
                calendarIconPosition,
                defaultMonth,
                defaultYear,
                hideInput,
                valueFormatter,
                onChangeFormatter,
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

        const wrapperRef = useRef<HTMLDivElement>(null),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, useRef(null)),
            runAfterUpdate = useRunAfterUpdate(),
            [textValue, setTextValue] = useState(''),
            [isFocused, setFocusedState] = useState(false),
            [builtInErrorMessage, setErrorMessage] = useState(''),
            [showCalendar, toggleCalendar] = useState(false),
            [active, setActive] = useState(false),
            isErrorPresent = useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]),
            mask = displayFormat!.replace(new RegExp('\\/|\\-', 'g'), ' $& ').toUpperCase();

        useEffect(() => {
            if (date) {
                const cursor = inputRef.current?.selectionStart || 0;
                setTextValue(format(date, displayFormat!).replace(new RegExp('\\/|\\-', 'g'), ' $& '));
                runAfterUpdate(() => inputRef.current?.setSelectionRange(cursor, cursor));
            } else if (!isErrorPresent && !isFocused) {
                setTextValue('');
            }
        }, [date, isFocused, isErrorPresent, displayFormat]);
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
            onIconClick = useCallback(
                event => {
                    event.stopPropagation();
                    if (!disabled) {
                        toggleCalendar(val => !val);
                        setActive(true);
                        inputRef.current?.focus();
                    }
                },
                [disabled]
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
                    setFocusedState(false);
                    inputRef.current?.value && validate(event, props.onBlur);
                },
                [props.onBlur, displayFormat]
            ),
            onInvalid = useCallback(
                (event: React.ChangeEvent<HTMLInputElement>) => validate(event, props.onInvalid),
                [props.onInvalid, displayFormat]
            ),
            onFocus = useCallback(
                (event: React.FocusEvent<HTMLInputElement>) => {
                    setActive(true);
                    setFocusedState(true);
                    props.onFocus && props.onFocus(event);
                },
                [props.onFocus]
            ),
            onDateChange = useCallback(
                (dt: Date, e: React.MouseEvent<HTMLButtonElement>) => {
                    onChange(onChangeFormatter ? onChangeFormatter(dt) : dt);
                    toggleCalendar(false);
                    setErrorMessage('');
                    setActive(false);
                    setErrorMessage((validator && validator(dt, e)) || '');
                },
                [onChange]
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

        useOuterClickNotifier((event: any) => {
            setActive(false);
            toggleCalendar(false);
            if (active) {
                validate(event, props.onBlur);
                props.onBlur && props.onBlur(event);
            }
        }, wrapperRef);

        const dateIconEl = () => (
            <DateIconWrapper variant={restProps.variant!} isErrorPresent={isErrorPresent} isActive={active} disabled={disabled} size={size}>
                <DateRangeIcon id={`${id}-calendar-icon`} title={`${id}-calendar-icon`} onClick={onIconClick} size={size} />
            </DateIconWrapper>
        );

        return (
            <Wrapper
                id={`${id}-datepicker-wrapper`}
                ref={wrapperRef}
                fullWidth={fullWidth}
                minWidth={minWidth}
                size={size}
                className={className}
                variant={restProps.variant!}
                placement={popoverPlacement!}
                hideInput={hideInput}
            >
                <TextField
                    errorText={errorText || builtInErrorMessage}
                    id={id}
                    ref={inputRef}
                    required={required}
                    {...(showCalendarIcon && (calendarIconPosition === 'left' ? { prefix: dateIconEl } : { suffix: dateIconEl }))}
                    fullWidth
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
                    {...{ ...restProps, onBlur, onFocus, minWidth, onInvalid }}
                />

                {showCalendar && (
                    <Calendar
                        id={`${id}-calendar`}
                        date={date}
                        isErrorPresent={isErrorPresent}
                        onClose={() => toggleCalendar(false)}
                        onChange={onDateChange}
                        defaultMonth={defaultMonth}
                        defaultYear={defaultYear}
                        minSelectableDate={minSelectableDate!}
                        maxSelectableDate={maxSelectableDate!}
                    />
                )}
            </Wrapper>
        );
    })
);
Component.defaultProps = {
    label: '',
    value: null,
    variant: 'filled',
    displayFormat: 'MM/dd/yyyy',
    disabled: false,
    required: false,
    fullWidth: false,
    minWidth: '20rem',
    minSelectableDate: new Date(1901, 0, 1),
    maxSelectableDate: new Date(2100, 11, 1),
    popoverPlacement: 'bottom-start',
    showCalendarIcon: true,
    showDecorators: true,
    calendarIconPosition: 'right'
};
Component.displayName = 'DatePicker';
export const DatePicker: FC<DatePickerProps> & WithStyle = Object.assign(Component, { Style: Wrapper });
