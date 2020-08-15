import { DateRangeIcon } from '@medly-components/icons';
import { parseToDate, WithStyle } from '@medly-components/utils';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Calendar from '../Calendar';
import { Popover, PopoverWrapper } from '../Popover';
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

    const [isCalendarVisible, setCalendarVisibilityState] = useState(false),
        [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        setFormattedDate(date ? format(date, displayFormat) : '');
        setCalendarVisibilityState(false);
    }, [date]);

    const hideCalendar = useCallback(() => setCalendarVisibilityState(false), []),
        showCalendar = useCallback(() => !restProps.disabled && setCalendarVisibilityState(true), [restProps.disabled]),
        handleInputOnChange = useCallback(() => {
            return;
        }, []),
        checkValue = useCallback((str: string, max: number) => {
            if (str.charAt(0) !== '0' || str === '00') {
                var num = parseInt(str);
                if (isNaN(num) || num <= 0 || num > max) num = 1;
                str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
            }
            return str;
        }, []),
        onKeyPress = useCallback(event => {
            if (event.which < 47 || event.which > 57) {
                event.preventDefault();
            }
        }, []),
        onInputHandler = useCallback(event => {
            let inputValue = event.target.value;

            if (/\D\/$/.test(inputValue)) {
                inputValue = inputValue.substr(0, inputValue.length - 3);
            }
            var values = inputValue.split('/').map((val: string) => val.trim());

            if (values[0]) values[0] = checkValue(values[0], 12);
            if (values[1]) values[1] = checkValue(values[1], 31);
            const updatedValue = values
                .map((val: string, index: number) => (val.length === 2 && index < 2 ? val + ' / ' : val))
                .join('')
                .substr(0, 14);
            setFormattedDate(updatedValue);
        }, []);

    return (
        <div>
            <PopoverWrapper placement={popoverPlacement} showPopover={isCalendarVisible} onClick={showCalendar} onOuterClick={hideCalendar}>
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
                    fullWidth
                />
                <Popover id={`${id}-popover`}>
                    <Calendar
                        id={`${id}-calendar`}
                        date={date}
                        onChange={onChange}
                        minSelectableDate={minSelectableDate ?? undefined}
                        maxSelectableDate={maxSelectableDate ?? undefined}
                    />
                </Popover>
            </PopoverWrapper>
        </div>
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
DatePicker.Style = PopoverWrapper.Style;
