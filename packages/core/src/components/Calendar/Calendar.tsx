import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import { endOfDay } from 'date-fns';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { PopoverContext } from '../Popover/Popover.context';
import Text from '../Text';
import * as Styled from './Calendar.styled';
import { getCalendarDates, getMonthAndYearFromDate, getNextMonthAndYear, getPreviousMonthAndYear, isSameDay, isSameMonth } from './helper';
import MonthAndYearSelection from './MonthAndYearSelection';
import { CalendarProps } from './types';
import WeekDays from './WeekDays';

const Component: React.FC<CalendarProps> = React.memo(
    ({ date, onChange, minSelectableDate, maxSelectableDate, isErrorPresent, ...restProps }) => {
        const today = new Date(),
            [, setCalenderVisibility] = useContext(PopoverContext),
            [{ month, year }, setMonthAndYear] = useState(getMonthAndYearFromDate(date || today)),
            { month: minMonth, year: minYear } = getMonthAndYearFromDate(minSelectableDate),
            { month: maxMonth, year: maxYear } = getMonthAndYearFromDate(maxSelectableDate);

        const handleDateChange = useCallback(
                (newDate: Date) => () => {
                    setCalenderVisibility(false);
                    onChange(newDate);
                },
                [onChange]
            ),
            handleNextBtnClick = useCallback(() => setMonthAndYear(getNextMonthAndYear(month, year)), [month, year]),
            handlePreviousBtnClick = useCallback(() => setMonthAndYear(getPreviousMonthAndYear(month, year)), [month, year]),
            isPrevBtnDisabled = useMemo(() => year === minYear && month === minMonth, [month, year, minMonth, minYear]),
            isNextBtnDisabled = useMemo(() => year === maxYear && month === maxMonth, [month, year, maxMonth, maxYear]);

        useEffect(() => {
            const firstDayOfCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1),
                lastDayOfCurrentMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            setMonthAndYear(
                getMonthAndYearFromDate(
                    date ||
                        (firstDayOfCurrentMonth < maxSelectableDate && lastDayOfCurrentMonth > minSelectableDate
                            ? today
                            : minSelectableDate)
                )
            );
        }, [date, minSelectableDate, maxSelectableDate]);

        return (
            <Styled.Calendar {...restProps}>
                <Styled.Header>
                    <MonthAndYearSelection
                        id={restProps.id}
                        month={month}
                        year={year}
                        onChange={setMonthAndYear}
                        minSelectableDate={minSelectableDate}
                        maxSelectableDate={maxSelectableDate}
                        isErrorPresent={isErrorPresent}
                    />
                    <Styled.MonthNavigation
                        className="calendar-month-navigation-go-back"
                        disabled={isPrevBtnDisabled}
                        onClick={handlePreviousBtnClick}
                    >
                        <KeyboardArrowLeftIcon title={`${restProps.id}-navigation-backward-icon`} />
                    </Styled.MonthNavigation>
                    <Styled.MonthNavigation
                        className="calendar-month-navigation-go-forward"
                        disabled={isNextBtnDisabled}
                        onClick={handleNextBtnClick}
                    >
                        <KeyboardArrowRightIcon title={`${restProps.id}-navigation-forward-icon`} />
                    </Styled.MonthNavigation>
                </Styled.Header>
                <Styled.CalendarGrid>
                    <WeekDays />
                    {getCalendarDates(month, year).map((dateArray, index) => {
                        const _date = new Date(dateArray[0], dateArray[1], dateArray[2]),
                            isSelected = isSameDay(_date, date),
                            isInActiveMonth = isSameMonth(_date, new Date(year, month, 1)),
                            isCurrentDate = isSameDay(_date, today);

                        return (
                            <Styled.Date
                                key={index}
                                title={_date.toDateString()}
                                isInActiveMonth={isInActiveMonth}
                                isSelected={isSelected}
                                isCurrentDate={isCurrentDate}
                                disabled={_date > maxSelectableDate || endOfDay(_date) < minSelectableDate}
                                onClick={handleDateChange(_date)}
                            >
                                <Text>{_date.getDate()}</Text>
                            </Styled.Date>
                        );
                    })}
                </Styled.CalendarGrid>
            </Styled.Calendar>
        );
    }
);
Component.displayName = 'Calendar';
Component.defaultProps = { date: null, minSelectableDate: new Date(1901, 0, 1), maxSelectableDate: new Date(2100, 11, 1) };
export const Calendar: React.FC<CalendarProps> & WithStyle = Object.assign(Component, {
    Style: Styled.Calendar
});
