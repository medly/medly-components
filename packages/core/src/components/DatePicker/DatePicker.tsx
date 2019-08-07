import { format } from 'date-fns';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import FieldWithLabel from '../FieldWithLabel';
import { DatePickerStyled } from './DatePicker.styled';
import { Props } from './types';

const DatePicker: React.SFC<Props> = React.memo(props => {
    const { label, labelPosition, value, onChange, required, disabled, placeholder } = props;

    const handleDateChange = (date: Date) => {
        onChange(format(date, 'yyyy-MM-dd').split('T')[0]);
    };

    return (
        <FieldWithLabel {...{ labelPosition }}>
            {label && (
                <FieldWithLabel.Label showPointer {...{ required, labelPosition }} htmlFor={label}>
                    {label}
                </FieldWithLabel.Label>
            )}
            <DatePickerStyled
                {...{ disabled, required }}
                placeholderText={placeholder || 'yyyy-mm-dd'}
                selected={value ? new Date(value) : null}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
            />
        </FieldWithLabel>
    );
});

DatePicker.displayName = 'DatePicker';
DatePicker.defaultProps = {
    labelPosition: 'left',
    required: false,
    disabled: false,
    label: ''
};

export default DatePicker;
