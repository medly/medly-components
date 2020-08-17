import { DateRangeIcon } from '@medly-components/icons';
import { parseToDate, WithStyle } from '@medly-components/utils';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Calendar from '../Calendar';
import Popover from '../Popover';
import TextField from '../TextField';
import { Props } from './types';

export const DatePicker: React.FC<Props> & WithStyle = React.memo(props => {
    const {
            value,
            onChange,
            displayFormat,
            label,
            labelPosition,
            fullWidth,
            minWidth,
            required,
            popoverPlacement,
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

    useEffect(() => {
        setFormattedDate(date ? format(date, displayFormat) : '');
    }, [date]);

    const checkValue = useCallback((str: string, max: number) => {
            if (str.charAt(0) !== '0' || str === '00') {
                let num = parseInt(str);
                if (isNaN(num) || num <= 0) num = 1;
                if (num > max) num = parseInt(num.toString().charAt(0));
                return num > parseInt(max.toString().charAt(0)) && num.toString().length === 1 ? '0' + num : num.toString();
            }
            return str;
        }, []),
        getNoOfDays = useCallback((num: string): number => {
            // TODO: Improve this logic
            return new Date(new Date().getFullYear(), parseInt(num), 0).getDate();
        }, []),
        onKeyPress = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.which < 47 || event.which > 57) {
                event.preventDefault();
            }
        }, []),
        onInputHandler = useCallback((event: React.SyntheticEvent<HTMLInputElement>) => {
            const regexForSlash = /\D\/$/;
            const inputValue = event.currentTarget.value;
            const value = regexForSlash.test(inputValue) ? inputValue.substr(0, inputValue.length - 3) : inputValue;
            const values = value.split('/').map((val: string) => val.trim());

            // TODO: remove this mutation, find a better way to do this
            if (values[0]) values[0] = checkValue(values[0], 12);
            if (values[1]) values[1] = checkValue(values[1], getNoOfDays(values[0]));
            // TODO: don't allow user to enter invalid date i.e. non-leap year
            const updatedValue = values
                .map((val: string, index: number) => (val.length === 2 && index < 2 ? val + ' / ' : val))
                .join('')
                .substr(0, 14);
            setFormattedDate(updatedValue);
        }, []),
        onBlurHandler = useCallback((event: React.SyntheticEvent<HTMLInputElement>) => {
            const inputValue = event.currentTarget.value;
            const values = inputValue.split('/').map((val: string) => val.trim());
            if (values.length !== 3) {
                setFormattedDate('');
            }
        }, []);

    return (
        <Popover interactionType="click">
            <TextField
                id={`${id}-input`}
                value={formattedDate}
                required={required}
                suffix={DateRangeIcon}
                placeholder={placeholder}
                label={label}
                variant={restProps.variant}
                readOnly={false}
                onKeyPress={onKeyPress}
                onInput={onInputHandler}
                onBlur={onBlurHandler}
                fullWidth
            />
            <Popover.Popup id={`${id}-popover`} placement={popoverPlacement}>
                <Calendar
                    id={`${id}-calendar`}
                    date={date}
                    onChange={onChange}
                    minSelectableDate={minSelectableDate ?? undefined}
                    maxSelectableDate={maxSelectableDate ?? undefined}
                />
            </Popover.Popup>
        </Popover>
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
    labelPosition: 'left',
    fullWidth: false,
    popoverPlacement: 'bottom-start'
};
DatePicker.displayName = 'DatePicker';
DatePicker.Style = Popover.Style;
