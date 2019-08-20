import { DateRangeInput, OnDatesChangeProps } from '@datepicker-react/styled';
import React, { useState } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import { DateRangePickerStyled } from './DateRangePicker.styled';
import { Props } from './types';

const DateRangePicker: React.SFC<Props> = React.memo(props => {
    const { label, labelPosition, value, onChange, required, disabled, ...restProps } = props;
    const [date, setDate] = useState(value || { startDate: null, endDate: null });
    const [showDatepicker, setShowDatepicker] = useState(null);

    const handleDateChange = ({ startDate, endDate, focusedInput }: OnDatesChangeProps) => {
        setDate({ startDate, endDate });
        setShowDatepicker(focusedInput);
        onChange && onChange({ startDate, endDate });
    };
    return (
        <FieldWithLabel {...{ labelPosition }}>
            {label && (
                <FieldWithLabel.Label showPointer {...{ required, labelPosition }} htmlFor={label}>
                    {label}
                </FieldWithLabel.Label>
            )}
            <DateRangePickerStyled disabled={disabled}>
                <DateRangeInput
                    {...restProps}
                    onDatesChange={handleDateChange}
                    // @ts-ignore
                    onFocusChange={setShowDatepicker}
                    startDate={date.startDate}
                    endDate={date.endDate}
                    focusedInput={showDatepicker}
                    showStartDateCalendarIcon={false}
                    showEndDateCalendarIcon={false}
                />
            </DateRangePickerStyled>
        </FieldWithLabel>
    );
});

DateRangePicker.displayName = 'DateRangePicker';
DateRangePicker.defaultProps = {
    labelPosition: 'left',
    required: false,
    disabled: false,
    label: ''
};

export default DateRangePicker;
