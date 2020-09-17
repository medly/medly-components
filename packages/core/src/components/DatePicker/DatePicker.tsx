import { DateRangeIcon } from '@medly-components/icons';
import { parseToDate, useCombinedRefs, useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Calendar from '../Calendar';
import Popover from '../Popover';
import TextField from '../TextField';
import { DateIcon, Wrapper } from './DatePicker.styled';
import { Props } from './types';

export const DatePicker: React.FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const {
                value,
                onChange,
                size,
                displayFormat,
                fullWidth,
                minWidth,
                required,
                disabled,
                errorText,
                className,
                minSelectableDate,
                maxSelectableDate,
                ...restProps
            } = props,
            id = props.id || props.label.toLowerCase().replace(/\s/g, '') || 'medly-datepicker', // TODO:- Remove static ID concept to avoid dup ID
            date: Date | null = useMemo(
                () => (value instanceof Date ? value : typeof value === 'string' ? parseToDate(value, displayFormat) : null),
                [value, displayFormat]
            );

        const wrapperRef = useRef<HTMLDivElement>(null),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            [textValue, setTextValue] = useState(''),
            [builtInErrorMessage, setErrorMessage] = useState(''),
            [showCalendar, toggleCalendar] = useState(false),
            [active, setActive] = useState(false),
            isErrorPresent = useMemo(() => !!errorText || !!builtInErrorMessage, [errorText, builtInErrorMessage]);

        useEffect(() => {
            setTextValue(date ? format(date, displayFormat).replace(new RegExp('\\/|\\-', 'g'), ' $& ') : '');
        }, [date, displayFormat]);

        const onTextChange = useCallback(
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    const value = event.target.value,
                        parsedDate = parseToDate(value, displayFormat);
                    setTextValue(value);
                    if (parsedDate.toString() !== 'Invalid Date') {
                        if (parsedDate < minSelectableDate || parsedDate > maxSelectableDate) {
                            setErrorMessage('Please select date from allowed range');
                        } else {
                            onChange(parsedDate);
                            setErrorMessage('');
                        }
                    }
                },
                [displayFormat]
            ),
            onIconClick = useCallback(
                event => {
                    event.stopPropagation();
                    if (!disabled) {
                        toggleCalendar(val => !val);
                        setActive(true);
                        inputRef.current.focus();
                    }
                },
                [disabled]
            ),
            onBlur = useCallback(
                (event: React.FocusEvent<HTMLInputElement>) => {
                    parseToDate(event.target.value, displayFormat).toString() === 'Invalid Date' && setErrorMessage('Enter valid date');
                    props.onBlur && props.onBlur(event);
                },
                [props.onBlur, displayFormat]
            ),
            onFocus = useCallback(
                (event: React.FocusEvent<HTMLInputElement>) => {
                    setActive(true);
                    props.onFocus && props.onFocus(event);
                },
                [props.onFocus]
            ),
            onDateChange = useCallback(
                (date: Date) => {
                    onChange(date);
                    toggleCalendar(false);
                    setErrorMessage('');
                    setActive(false);
                },
                [onChange]
            );

        useOuterClickNotifier(() => {
            setActive(false);
            toggleCalendar(false);
        }, wrapperRef);

        const suffixEl = () => (
            <DateIcon variant={restProps.variant} isErrorPresent={isErrorPresent} isActive={active} disabled={disabled} size={size}>
                <DateRangeIcon onClick={onIconClick} size={size} />
            </DateIcon>
        );

        return (
            <Wrapper
                id={`${id}-datepicker-wrapper`}
                ref={wrapperRef}
                fullWidth={fullWidth}
                minWidth={minWidth}
                size={size}
                className={className}
            >
                <TextField
                    errorText={errorText || builtInErrorMessage}
                    id={id}
                    ref={inputRef}
                    required={required}
                    suffix={suffixEl}
                    fullWidth
                    mask={displayFormat.replace(new RegExp('\\/|\\-', 'g'), ' $& ').toUpperCase()}
                    size={size}
                    disabled={disabled}
                    value={textValue}
                    onChange={onTextChange}
                    {...{ ...restProps, onBlur, onFocus }}
                />
                {showCalendar && (
                    <Calendar
                        id={`${id}-calendar`}
                        date={date}
                        isErrorPresent={isErrorPresent}
                        onChange={onDateChange}
                        minSelectableDate={minSelectableDate ?? undefined}
                        maxSelectableDate={maxSelectableDate ?? undefined}
                    />
                )}
            </Wrapper>
        );
    })
);
DatePicker.defaultProps = {
    label: '',
    value: null,
    variant: 'filled',
    displayFormat: 'MM/dd/yyyy',
    disabled: false,
    required: false,
    fullWidth: false,
    minSelectableDate: new Date(1901, 0, 1),
    maxSelectableDate: new Date(2100, 11, 1)
};
DatePicker.displayName = 'DatePicker';
DatePicker.Style = Popover.Style;
