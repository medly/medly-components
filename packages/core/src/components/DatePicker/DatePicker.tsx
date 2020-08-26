import { DateRangeIcon } from '@medly-components/icons';
import { parseToDate, WithStyle } from '@medly-components/utils';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
            const values = event.target.value.split('/');
            const month = values[0];
            const day = values[1];
            if (parseInt(month) > 12) {
                setErrorText('Enter valid Month');
            } else if (parseInt(day) > validateDay(parseInt(month))) {
                setErrorText('Enter valid Day');
            } else {
                setErrorText('');
            }
            if (!disabled) {
                setFormattedDate(event.target.value);
            }
        }, []),
        iconClickHandler = useCallback(event => {
            event.preventDefault();
            toggleCalendar(true);
        }, []),
        onBlurHandler = useCallback(() => {
            setActive(false);
            toggleCalendar(false);
        }, []),
        onFocusHandler = useCallback(() => setActive(true), []);

    const suffixEl = () => (
        <DateIcon variant={restProps.variant} errorText={errorText} active={active} disabled={disabled}>
            <DateRangeIcon onClick={iconClickHandler}></DateRangeIcon>
        </DateIcon>
    );

    return (
        <Wrapper fullWidth={fullWidth}>
            <InputMask
                mask="99/99/9999"
                // @ts-ignore
                maskPlaceholder={displayFormat}
                placeholder={placeholder}
                value={formattedDate}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
                readOnly={false}
                disabled={disabled}
            >
                <TextField
                    errorText={errorText}
                    id={id}
                    required={required}
                    suffix={suffixEl}
                    label={label}
                    variant={restProps.variant}
                    disabled={disabled}
                />
            </InputMask>
            {showCalendar && (
                <Calendar
                    id={`${id}-calendar`}
                    date={date}
                    onChange={onChange}
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
