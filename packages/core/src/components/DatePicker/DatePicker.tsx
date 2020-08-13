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
