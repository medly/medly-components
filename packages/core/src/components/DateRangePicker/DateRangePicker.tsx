import { DateRangeInput, FocusedInput, OnDatesChangeProps } from '@datepicker-react/styled';
import { DateRangeIcon } from '@medly-components/icons';
import { format } from 'date-fns';
import React, { FC, useCallback, useMemo, useState } from 'react';
import * as Styled from '../TextField/Styled';
import { DateRangePickerStyled, Wrapper } from './DateRangePicker.styled';
import { Props } from './types';

export const DateRangePicker: FC<Props> = React.memo(props => {
    const {
        size,
        variant,
        fullWidth,
        value,
        onChange,
        disabled,
        placement,
        minSelectableDate,
        maxSelectableDate,
        displayFormat,
        ...restProps
    } = props;
    const minWidth = props.minWidth || size === 'S' ? '25rem' : '29rem';

    const [showDatepicker, setShowDatepicker] = useState<FocusedInput>(null),
        dates = useMemo(() => ({ startDate: value.startDate || null, endDate: value.endDate || null }), [value.startDate, value.endDate]);

    const handleClick = useCallback((event: React.MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
        }, []),
        handleDateChange = useCallback(
            ({ startDate, endDate, focusedInput }: OnDatesChangeProps) => {
                setShowDatepicker(focusedInput);
                onChange && onChange({ startDate, endDate });
            },
            [onChange]
        ),
        toggleCalendar = useCallback(() => setShowDatepicker(val => (val ? null : 'startDate')), []),
        formatFn = useCallback((date: Date) => format(date, displayFormat), [displayFormat]);

    return (
        <Wrapper>
            <Styled.OuterWrapper fullWidth={fullWidth} minWidth={minWidth}>
                <Styled.InnerWrapper size={size} disabled={disabled} variant={variant} onClick={toggleCalendar}>
                    <Styled.Prefix size={size}>
                        <DateRangeIcon size={size} />
                    </Styled.Prefix>
                    <DateRangePickerStyled
                        size={size}
                        placement={placement}
                        data-testid="react-datepicker"
                        disabled={disabled}
                        onClick={handleClick}
                    >
                        <DateRangeInput
                            {...dates}
                            {...restProps}
                            displayFormat={formatFn}
                            onDatesChange={handleDateChange}
                            showClose={false}
                            onFocusChange={setShowDatepicker}
                            focusedInput={showDatepicker}
                            showStartDateCalendarIcon={false}
                            showEndDateCalendarIcon={false}
                            minBookingDate={minSelectableDate}
                            maxBookingDate={maxSelectableDate}
                        />
                    </DateRangePickerStyled>
                </Styled.InnerWrapper>
            </Styled.OuterWrapper>
        </Wrapper>
    );
});

DateRangePicker.displayName = 'DateRangePicker';
DateRangePicker.defaultProps = {
    displayFormat: 'MM/dd/yyyy',
    placement: 'bottom-start',
    fullWidth: false,
    disabled: false,
    size: 'M',
    variant: 'filled'
};
