import { DateRangeInput, OnDatesChangeProps } from '@datepicker-react/styled';
import React, { SFC, useCallback, useState } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import { DateRangePickerStyled } from './DateRangePicker.styled';
import { Props } from './types';

export const DateRangePicker: SFC<Props> = React.memo(props => {
    const { label, labelPosition, fullWidth, value, onChange, required, disabled, minWidth, placement, ...restProps } = props;
    const [date, setDate] = useState(value || { startDate: null, endDate: null });
    const [showDatepicker, setShowDatepicker] = useState(null);

    const handleDateChange = useCallback(
            ({ startDate, endDate, focusedInput }: OnDatesChangeProps) => {
                setDate({ startDate, endDate });
                setShowDatepicker(focusedInput);
                onChange && onChange({ startDate, endDate });
            },
            [onChange]
        ),
        handleClick = useCallback((event: React.MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
        }, []);

    return (
        <FieldWithLabel {...{ labelPosition, fullWidth, minWidth }}>
            {label && (
                <FieldWithLabel.Label {...{ required, labelPosition }} htmlFor={label}>
                    {label}
                </FieldWithLabel.Label>
            )}
            <DateRangePickerStyled placement={placement} data-testid="react-datepicker" disabled={disabled} onClick={handleClick}>
                <DateRangeInput
                    {...restProps}
                    onDatesChange={handleDateChange}
                    showClose={false}
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
    placement: 'bottom-start',
    labelPosition: 'left',
    fullWidth: false,
    required: false,
    disabled: false,
    label: ''
};
