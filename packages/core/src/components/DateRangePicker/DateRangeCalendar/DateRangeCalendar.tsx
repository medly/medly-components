import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getMonthAndYearFromDate, getNextMonthAndYear, getPreviousMonthAndYear } from '../../Calendar/helper';
import * as Styled from './DateRangeCalendar.styled';
import Month from './Month';
import { CalendarAnimationTypes, Props } from './types';

export const DateRangeCalendar: React.FC<Props> & WithStyle = React.memo(props => {
    const {
            id,
            size,
            setActive,
            placement,
            selectedDates,
            focusedElement,
            focusElement,
            setFocusedElement,
            onDateSelection,
            minSelectableDate,
            maxSelectableDate
        } = props,
        { startDate, endDate } = selectedDates;

    const [hoveredDate, setHoveredDate] = useState<Date | null>(null),
        [slideDirection, setSlideDirection] = useState<CalendarAnimationTypes>(),
        [{ month, year }, setMonthAndYear] = useState(getMonthAndYearFromDate(startDate || new Date())),
        { month: nextMonth, year: nextYear } = useMemo(() => getNextMonthAndYear(month, year), [month, year]),
        handleNextIconClick = useCallback(() => setSlideDirection('move-out-left'), []),
        handlePrevIconClick = useCallback(() => setSlideDirection('move-out-right'), []),
        handleDateSelection = useCallback(
            (date: Date) => {
                if (focusedElement === `START_DATE`) {
                    if (selectedDates.endDate && date >= selectedDates.endDate) {
                        onDateSelection({ startDate: selectedDates.endDate, endDate: date });
                    } else {
                        onDateSelection({ ...selectedDates, startDate: date });
                    }
                    setFocusedElement('END_DATE');
                } else {
                    if (selectedDates.startDate && date <= selectedDates.startDate) {
                        onDateSelection({ startDate: date, endDate: selectedDates.startDate });
                    } else {
                        onDateSelection({ ...selectedDates, endDate: date });
                    }
                    setFocusedElement('START_DATE');
                }
            },
            [selectedDates, focusedElement]
        ),
        handleCalendarClick = useCallback(() => {
            focusElement(focusedElement);
            setActive(true);
        }, [focusedElement]),
        handleAnimationEnd = useCallback(() => {
            if (slideDirection === 'move-out-left' || slideDirection === 'move-out-right') {
                if (slideDirection === 'move-out-left') {
                    setMonthAndYear(val => getNextMonthAndYear(val.month, val.year));
                    setSlideDirection('move-in-left');
                } else {
                    setMonthAndYear(val => getPreviousMonthAndYear(val.month, val.year));
                    setSlideDirection('move-in-right');
                }
            }
        }, [slideDirection]);

    const commonProps = {
        startDate,
        endDate,
        minSelectableDate,
        maxSelectableDate,
        hoveredDate,
        setHoveredDate,
        onChange: handleDateSelection
    };

    useEffect(() => {
        selectedDates.startDate &&
            !selectedDates.endDate &&
            selectedDates.startDate.getMonth() !== month &&
            selectedDates.startDate.getMonth() !== nextMonth &&
            setMonthAndYear(getMonthAndYearFromDate(startDate));
        selectedDates.endDate &&
            !selectedDates.startDate &&
            selectedDates.endDate.getMonth() !== month &&
            selectedDates.endDate.getMonth() !== nextMonth &&
            setMonthAndYear(getPreviousMonthAndYear(endDate.getMonth(), endDate.getFullYear()));
    }, [selectedDates.startDate, selectedDates.endDate]);

    return (
        <Styled.DateRangeCalendar id={id} size={size} placement={placement} onClick={handleCalendarClick}>
            <Styled.NavigatorIcon id={`${id}-navigation-backward`} align="left" onClick={handlePrevIconClick}>
                <KeyboardArrowLeftIcon />
            </Styled.NavigatorIcon>
            <Styled.NavigatorIcon id={`${id}-navigation-forward`} align="right" onClick={handleNextIconClick}>
                <KeyboardArrowRightIcon />
            </Styled.NavigatorIcon>
            <Styled.MonthsWrapper
                key={month}
                id={`${id}-months-wrapper`}
                slideDirection={slideDirection}
                onAnimationEnd={handleAnimationEnd}
            >
                <Month id={`${id}-${month}-month`} month={month} year={year} {...commonProps} />
                <Month id={`${id}-${nextMonth}-month`} month={nextMonth} year={nextYear} {...commonProps} />
            </Styled.MonthsWrapper>
        </Styled.DateRangeCalendar>
    );
});
DateRangeCalendar.displayName = 'DateRangeCalendar';
DateRangeCalendar.Style = Styled.DateRangeCalendar;
