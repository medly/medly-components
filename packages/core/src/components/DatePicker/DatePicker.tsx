import { DateSingleInput } from '@datepicker-react/styled';
import React, { useState } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import { DatePickerStyled } from './DatePicker.styled';
import { Props } from './types';

const DatePicker: React.SFC<Props> = React.memo(props => {
    const { label, labelPosition, fullWidth, value, onChange, required, disabled, placeholder, ...restProps } = props;
    const [date, setDate] = useState(value || null);
    const [showDatepicker, setShowDatepicker] = useState(false);

    const handleDateChange = (state: { date: Date; showDatepicker: boolean }) => {
            setDate(state.date);
            setShowDatepicker(false);
            onChange && onChange(state.date);
        },
        handleClick = (event: React.MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
        };

    return (
        <FieldWithLabel {...{ fullWidth, labelPosition }}>
            {label && (
                <FieldWithLabel.Label showPointer {...{ required, labelPosition }} htmlFor={label}>
                    {label}
                </FieldWithLabel.Label>
            )}
            <DatePickerStyled disabled={disabled} onClick={handleClick}>
                <DateSingleInput
                    {...restProps}
                    showCalendarIcon={false}
                    onDateChange={handleDateChange}
                    onFocusChange={setShowDatepicker}
                    date={date}
                    phrases={{
                        dateAriaLabel: placeholder,
                        datepickerStartDatePlaceholder: placeholder,
                        datepickerStartDateLabel: placeholder,
                        datepickerEndDateLabel: placeholder,
                        datePlaceholder: placeholder,
                        datepickerEndDatePlaceholder: placeholder,
                        resetDates: placeholder,
                        close: placeholder
                    }}
                    showClose={false}
                    showResetDate={false}
                    showDatepicker={showDatepicker}
                />
            </DatePickerStyled>
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
