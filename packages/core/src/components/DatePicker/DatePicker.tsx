import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import FieldWithLabel from '../FieldWithLabel';
import { DatePickerStyled } from './DatePicker.styled';
import { Props } from './types';

const DatePicker: React.SFC<Props> = React.memo(props => {
    const { label, labelPosition, value, onChange, required, disabled } = props;
    return (
        <FieldWithLabel {...{ labelPosition }}>
            {label && (
                <FieldWithLabel.Label showPointer {...{ required, labelPosition }} htmlFor={label}>
                    {label}
                </FieldWithLabel.Label>
            )}
            <DatePickerStyled
                {...{ disabled, required }}
                placeholderText="yyyy-mm-dd"
                selected={value}
                onChange={onChange}
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
