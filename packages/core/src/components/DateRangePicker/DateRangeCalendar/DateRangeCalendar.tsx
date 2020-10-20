import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '@medly-components/icons';
import { useUpdateEffect, WithStyle } from '@medly-components/utils';
import React, { useCallback, useMemo, useState } from 'react';
import { getMonthAndYearFromDate, getNextMonthAndYear, getPreviousMonthAndYear } from '../../Calendar/helper';
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

    const [hoveredDate, setHoveredDate] = useState<Date | null>(null),
        [{ month, year }, setMonthAndYear] = useState(getMonthAndYearFromDate(startDate || new Date())),
        { month: nextMonth, year: nextYear } = useMemo(() => getNextMonthAndYear(month, year), [month, year]),
        handleNextIconClick = useCallback(() => setMonthAndYear(val => getNextMonthAndYear(val.month, val.year)), []),
        handlePrevIconClick = useCallback(() => setMonthAndYear(val => getPreviousMonthAndYear(val.month, val.year)), []),
        handleDateSelection = useCallback(
            (date: Date) => {
                if (focusedElement === `START_DATE`) {
                    if ('endDate' in selectedDates && date >= selectedDates.endDate) {
                        delete selectedDates.endDate;
                    }
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
        minSelectableDate,
        maxSelectableDate,
        hoveredDate,
        setHoveredDate,
        onChange: handleDateSelection
    };

    return (
        <Styled.DateRangeCalendar id={id} size={size} placement={placement}>
            <Styled.NavigatorIcon id={`${id}-navigation-backward`} align="left" onClick={handlePrevIconClick}>
                <KeyboardArrowLeftIcon />
            </Styled.NavigatorIcon>
            <Styled.NavigatorIcon id={`${id}-navigation-forward`} align="right" onClick={handleNextIconClick}>
                <KeyboardArrowRightIcon />
            </Styled.NavigatorIcon>
            <Month id={`${id}-${month}-month`} month={month} year={year} {...commonProps} />
            <Month id={`${id}-${nextMonth}-month`} month={nextMonth} year={nextYear} {...commonProps} />
        </Styled.DateRangeCalendar>
    );
});
DateRangeCalendar.displayName = 'DateRangeCalendar';
DateRangeCalendar.Style = Styled.DateRangeCalendar;
