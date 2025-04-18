import { CloseIcon, KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import { endOfDay } from 'date-fns';
import type { FC } from 'react';
import { memo, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { PopoverContext } from '../Popover/Popover.context';
import Text from '../Text';
import * as Styled from './Calendar.styled';
import MonthAndYearSelection from './MonthAndYearSelection';
import WeekDays from './WeekDays';
import { getCalendarDates, getMonthAndYearFromDate, getNextMonthAndYear, getPreviousMonthAndYear, isSameDay, isSameMonth } from './helper';
import { CalendarProps } from './types';

const Component: FC<CalendarProps> = memo(
    ({ date, onChange, onClose, minSelectableDate, maxSelectableDate, isErrorPresent, defaultMonth = 0, defaultYear, ...restProps }) => {
        const today = new Date(),
            ref = useRef<HTMLDivElement>(null),
            defaultDate = defaultYear ? new Date(defaultYear, defaultMonth, 1) : null,
            [, setCalenderVisibility] = useContext(PopoverContext),
            [{ month, year }, setMonthAndYear] = useState(getMonthAndYearFromDate(date || defaultDate || today)),
            { month: minMonth, year: minYear } = getMonthAndYearFromDate(minSelectableDate),
            { month: maxMonth, year: maxYear } = getMonthAndYearFromDate(maxSelectableDate);

        const handleDateChange = useCallback(
                (newDate: Date) => (e: React.MouseEvent<HTMLButtonElement>) => {
                    setCalenderVisibility(false);
                    onChange(newDate, e);
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
                        defaultDate ||
                        (firstDayOfCurrentMonth < maxSelectableDate && lastDayOfCurrentMonth > minSelectableDate
                            ? today
                            : minSelectableDate)
                )
            );
        }, [date, minSelectableDate, maxSelectableDate]);

        useEffect(() => {
            // @ts-ignore
            ref.current?.scrollIntoView({ behavior: 'instant', block: 'nearest' });
        }, []);

        return (
            <Styled.Calendar ref={ref} {...restProps}>
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
                    <CloseIcon
                        title={`${restProps.id}-close-icon`}
                        onClick={() => {
                            onClose?.();
                            setCalenderVisibility(false);
                        }}
                    />
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
                {restProps.children}
            </Styled.Calendar>
        );
    }
);
Component.displayName = 'Calendar';
Component.defaultProps = { date: null, minSelectableDate: new Date(1901, 0, 1), maxSelectableDate: new Date(2100, 11, 1) };
export const Calendar: FC<CalendarProps> & WithStyle = Object.assign(Component, {
    Style: Styled.Calendar
});
