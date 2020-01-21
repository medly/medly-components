import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Button from '../Button';
import Card from '../Card';
import SingleSelect from '../SingleSelect';
import Text from '../Text';
import * as Styled from './Calendar.styled';
import { CALENDAR_MONTHS, WEEK_DAYS } from './constants';
import { getCalendarDates, getMonthAndDateFromDate, getNextMonthAndYear, getPreviousMonthAndYear, isSameDay, isSameMonth } from './helper';
import { Props } from './types';

export const Calendar: React.SFC<Props> = React.memo(({ date, onChange, minYear, maxYear, ...restProps }) => {
    const today = new Date(),
        [{ month, year }, setMonthAndYear] = useState(getMonthAndDateFromDate(date || today));

    const handleDateChange = (newDate: Date) => () => onChange(newDate),
        handleNextBtnClick = useCallback(() => setMonthAndYear(getNextMonthAndYear(month, year)), [month, year]),
        handlePreviousBtnClick = useCallback(() => setMonthAndYear(getPreviousMonthAndYear(month, year)), [month, year]),
        handleMonthChange = useCallback((value: number) => setMonthAndYear(prev => ({ year: prev.year, month: value })), []),
        handleYearChange = useCallback((value: number) => setMonthAndYear(prev => ({ month: prev.month, year: value })), []);

    const weekDays = useMemo(() => WEEK_DAYS.map(label => <Text key={label}>{label}</Text>), []),
        monthOptions = useMemo(() => CALENDAR_MONTHS.map((label, index) => ({ label, value: index })), []),
        yearOptions = useMemo(
            () =>
                [...Array(maxYear - minYear)].map((_, i) => {
                    const value = i + 1 + minYear;
                    return { value, label: `${value}` };
                }),
            []
        );

    useEffect(() => {
        setMonthAndYear(getMonthAndDateFromDate(date || today));
    }, [date]);

    return (
        <Card variant="outlined" {...restProps}>
            <Styled.Header>
                <Button variant="flat" onClick={handlePreviousBtnClick}>{`<`}</Button>
                <Text textSize="L1">{`${CALENDAR_MONTHS[month]} ${year}`}</Text>
                <Button variant="flat" onClick={handleNextBtnClick}>{`>`}</Button>
            </Styled.Header>
            <Styled.MonthAndYearSelection>
                <SingleSelect id="month-selector" value={month} options={monthOptions} onChange={handleMonthChange} />
                <SingleSelect id="year-selector" value={year} options={yearOptions} onChange={handleYearChange} />
            </Styled.MonthAndYearSelection>

            <Styled.CalendarGrid>
                {weekDays}
                {getCalendarDates(month, year).map((dateArray, index) => {
                    const _date = new Date(dateArray[0], dateArray[1], dateArray[2]),
                        isSelected = isSameDay(_date, date),
                        isInActiveMonth = isSameMonth(_date, new Date(year, month, 1));

                    return (
                        <Styled.Date
                            key={index}
                            title={_date.toDateString()}
                            isInActiveMonth={isInActiveMonth}
                            isSelected={isSelected}
                            onClick={handleDateChange(_date)}
                        >
                            <Text textSize="M1">{_date.getDate()}</Text>
                        </Styled.Date>
                    );
                })}
            </Styled.CalendarGrid>
        </Card>
    );
});
Calendar.defaultProps = {
    date: null,
    minYear: 1901,
    maxYear: 2100
};
