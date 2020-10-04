import { useUpdateEffect, WithStyle } from '@medly-components/utils/src';
import React, { useCallback, useState } from 'react';
import { getMonthAndYearFromDate } from '../../Calendar/helper';
import * as Styled from './DateRangeCalendar.styled';
import Month from './Month';
import { Props } from './types';

export const DateRangeCalendar: React.FC<Props> & WithStyle = React.memo(props => {
    const {
            id,
            size,
            placement,
            selectedDates,
            focusedElement,
            setFocusedElement,
            onDateSelection,
            minSelectableDate,
            maxSelectableDate
        } = props,
        { startDate, endDate } = selectedDates;

    const [{ month, year }, setMonthAndYear] = useState(getMonthAndYearFromDate(startDate || new Date())),
        handleDateSelection = useCallback(
            (date: Date) => {
                if (focusedElement === `START_DATE`) {
                    onDateSelection({ ...selectedDates, startDate: date });
                    setFocusedElement('END_DATE');
                } else {
                    onDateSelection({ ...selectedDates, endDate: date });
                    setFocusedElement('START_DATE');
                }
            },
            [selectedDates, focusedElement]
        );

    useUpdateEffect(() => {
        startDate && setMonthAndYear(getMonthAndYearFromDate(startDate));
    }, [startDate]);

    const commonProps = {
        startDate,
        endDate,
        onChange: handleDateSelection,
        minSelectableDate,
        maxSelectableDate
    };

    return (
        <Styled.DateRangeCalendar id={id} size={size} placement={placement}>
            <Month id={`${id}-${month}-month`} month={month} year={year} {...commonProps} />
            <Month id={`${id}-${month + 1}-month`} month={month + 1} year={year} {...commonProps} />
        </Styled.DateRangeCalendar>
    );
});
DateRangeCalendar.displayName = 'DateRangeCalendar';
DateRangeCalendar.Style = Styled.DateRangeCalendar;
