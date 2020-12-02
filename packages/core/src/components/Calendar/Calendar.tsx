import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '@medly-components/icons';
import { useUpdateEffect, WithStyle } from '@medly-components/utils';
import { endOfDay } from 'date-fns';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { PopoverContext } from '../Popover/Popover.context';
import SingleSelect from '../SingleSelect';
import Text from '../Text';
import * as Styled from './Calendar.styled';
import { SHORT_CALENDAR_MONTHS } from './constants';
import { getCalendarDates, getMonthAndYearFromDate, getNextMonthAndYear, getPreviousMonthAndYear, isSameDay, isSameMonth } from './helper';
import { CalendarProps } from './types';
import WeekDays from './WeekDays';

export const Calendar: React.FC<CalendarProps> & WithStyle = React.memo(
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
            handleMonthChange = useCallback((value: number) => setMonthAndYear(prev => ({ year: prev.year, month: value })), []),
            handleYearChange = useCallback((value: number) => setMonthAndYear(prev => ({ month: prev.month, year: value })), []),
            isPrevBtnDisabled = useMemo(() => year === minYear && month === minMonth, [month, year, minMonth, minYear]),
            isNextBtnDisabled = useMemo(() => year === maxYear && month === maxMonth, [month, year, maxMonth, maxYear]);

        const monthOptions = useMemo(
                () =>
                    SHORT_CALENDAR_MONTHS.reduce((acc, curr, index) => {
                        const isDisabled = new Date(year, index, 1) > maxSelectableDate || new Date(year, index + 1, 0) < minSelectableDate;
                        return [...acc, { label: curr, value: index, disabled: isDisabled }];
                    }, []),
                [minMonth, maxMonth, year]
            ),
            yearOptions = useMemo(
                () =>
                    [...Array(maxYear - minYear + 1)].map((_, i) => {
                        const value = i + minYear;
                        return { value, label: `${value}` };
                    }),
                [minYear, maxYear]
            );

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

        useUpdateEffect(() => {
            // If selected month is not allowed in the newly selected year then change month to first option in the months option
            const nonDisabledMonths = monthOptions.filter(option => !option.disabled).map(options => options.value);
            !nonDisabledMonths.includes(month) && setMonthAndYear({ year, month: nonDisabledMonths[0] || 0 });
        }, [year]);

        return (
            <Styled.Calendar {...restProps}>
                <Styled.Header>
                    <Styled.MonthAndYearSelection>
                        <SingleSelect
                            id={`${restProps.id}-month-selector`}
                            size="S"
                            value={month}
                            options={monthOptions}
                            onChange={handleMonthChange}
                            placeholder="Month"
                            variant="flat"
                            errorText={isErrorPresent ? ' ' : ''}
                        />
                        <SingleSelect
                            id={`${restProps.id}-year-selector`}
                            size="S"
                            value={year}
                            options={yearOptions}
                            onChange={handleYearChange}
                            placeholder="Year"
                            variant="flat"
                            errorText={isErrorPresent ? ' ' : ''}
                        />
                    </Styled.MonthAndYearSelection>
                    <Styled.MonthNavigation
                        className="calendar-month-navigation-go-back"
                        disabled={isPrevBtnDisabled}
                        onClick={handlePreviousBtnClick}
                    >
                        <KeyboardArrowLeftIcon />
                    </Styled.MonthNavigation>
                    <Styled.MonthNavigation
                        className="calendar-month-navigation-go-forward"
                        disabled={isNextBtnDisabled}
                        onClick={handleNextBtnClick}
                    >
                        <KeyboardArrowRightIcon />
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
Calendar.displayName = 'Calendar';
Calendar.Style = Styled.Calendar;
Calendar.defaultProps = {
    date: null,
    minSelectableDate: new Date(1901, 0, 1),
    maxSelectableDate: new Date(2100, 11, 1)
};
