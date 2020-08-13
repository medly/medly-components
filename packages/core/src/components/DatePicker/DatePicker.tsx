import { parseToDate, WithStyle } from '@medly-components/utils';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Calendar from '../Calendar';
import FieldWithLabel from '../FieldWithLabel';
import Popover from '../Popover';
import * as Styled from './DatePicker.styled';
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

    const handleInputOnChange = useCallback(() => null, []);

    return (
        <FieldWithLabel id={`${id}`} {...{ labelPosition, fullWidth, minWidth }}>
            {label && (
                <FieldWithLabel.Label {...{ required, labelPosition }} htmlFor={id}>
                    {label}
                </FieldWithLabel.Label>
            )}
            <Popover interactionType="click">
                <Styled.Input
                    fullWidth
                    {...restProps}
                    required={required}
                    id={`${id}-input`}
                    value={formattedDate}
                    autoComplete="off"
                    onChange={handleInputOnChange}
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
        </FieldWithLabel>
    );
});

DatePicker.defaultProps = {
    value: null,
    placeholder: 'Select Date',
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
