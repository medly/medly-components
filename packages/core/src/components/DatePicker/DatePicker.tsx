import { DateRangeIcon } from '@medly-components/icons';
import { parseToDate, useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import InputMask from 'react-input-mask';
import Calendar from '../Calendar';
import Popover from '../Popover';
import TextField from '../TextField';
import { DateIcon, Wrapper } from './DatePicker.styled';
import { Props } from './types';

export const DatePicker: React.FC<Props> & WithStyle = React.memo(props => {
    const {
            value,
            onChange,
            size,
            displayFormat,
            label,
            fullWidth,
            minWidth,
            required,
            disabled,
            minSelectableDate,
            maxSelectableDate,
            placeholder,
            ...restProps
        } = props,
        id = props.id || 'medly-datepicker',
        date: Date | null = useMemo(
            () => (value instanceof Date ? value : typeof value === 'string' ? parseToDate(value, displayFormat) : null),
            [value, displayFormat]
        );

    const wrapperRef = useRef<HTMLDivElement>(null);
    const [formattedDate, setFormattedDate] = useState('');
    const [errorText, setErrorText] = useState('');
    const [showCalendar, toggleCalendar] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        setFormattedDate(date ? format(date, displayFormat) : '');
    }, [date]);

    const validateDay = useCallback((month: number) => {
            if (month === 2) return 28;
            if (month === 4 || month === 6 || month === 9 || month === 11) return 30;
            return 31;
        }, []),
        onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value,
                values = value.split('/'),
                month = values[0],
                day = values[1];
            if (parseInt(month) > 12) {
                setErrorText('Enter valid Month');
            } else if (parseInt(day) > validateDay(parseInt(month))) {
                setErrorText('Enter valid Day');
            } else {
                setErrorText('');
            }
            if (!disabled) {
                setFormattedDate(value);
            }
        }, []),
        iconClickHandler = useCallback(event => {
            event.preventDefault();
            toggleCalendar(true);
        }, []),
        onBlurHandler = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
            const value = event.target.value;
            setActive(false);
            if (parseToDate(value, displayFormat).toString() === 'Invalid Date' && required) {
                setErrorText('Enter valid date');
            }
            restProps.onBlur && restProps.onBlur(event);
        }, []),
        onFocusHandler = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
            setActive(true);
            restProps.onFocus && restProps.onFocus(event);
        }, []),
        validate = useCallback((event: React.InvalidEvent<HTMLInputElement>) => {
            if (event.target.value === '' && required) {
                setErrorText('Please fill in this field.');
            }
            restProps.onInvalid && restProps.onInvalid(event);
        }, []),
        inputValidator = useCallback((value: any) => {
            if (value.match(/\d+/) && parseToDate(value, displayFormat).toString() === 'Invalid Date') {
                return 'Enter valid date';
            }
            return '';
        }, []),
        onDateChange = useCallback((date: Date) => {
            onChange(date);
            toggleCalendar(false);
            setErrorText('');
        }, []);

    useOuterClickNotifier(() => {
        setActive(false);
        toggleCalendar(false);
    }, wrapperRef);

    const suffixEl = () => (
        <DateIcon variant={restProps.variant} errorText={errorText} active={active} disabled={disabled} size={size}>
            <DateRangeIcon onClick={iconClickHandler} size={size}></DateRangeIcon>
        </DateIcon>
    );

    return (
        <Wrapper ref={wrapperRef} fullWidth={fullWidth} minWidth={minWidth} size={size}>
            <InputMask
                mask="99/99/9999"
                // @ts-ignore
                maskPlaceholder={displayFormat}
                placeholder={placeholder}
                value={formattedDate}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                onInvalid={validate}
                readOnly={false}
                disabled={disabled}
            >
                <TextField
                    errorText={errorText}
                    id={id}
                    required={required}
                    suffix={suffixEl}
                    label={label}
                    fullWidth
                    size={size}
                    variant={restProps.variant}
                    disabled={disabled}
                    validator={inputValidator}
                />
            </InputMask>
            {showCalendar && (
                <Calendar
                    id={`${id}-calendar`}
                    date={date}
                    onChange={onDateChange}
                    minSelectableDate={minSelectableDate ?? undefined}
                    maxSelectableDate={maxSelectableDate ?? undefined}
                />
            )}
        </Wrapper>
    );
});

DatePicker.defaultProps = {
    value: null,
    placeholder: 'Date of Birth',
    variant: 'filled',
    displayFormat: 'MM/dd/yyyy',
    disabled: false,
    required: false,
    label: '',
    fullWidth: false
};
DatePicker.displayName = 'DatePicker';
DatePicker.Style = Popover.Style;
