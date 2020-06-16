import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Button from '../Button';
import Card from '../Card';
import SingleSelect from '../SingleSelect';
import Text from '../Text';
import * as Styled from './Calendar.styled';
import { CALENDAR_MONTHS, WEEK_DAYS } from './constants';
import { getCalendarDates, getMonthAndYearFromDate, getNextMonthAndYear, getPreviousMonthAndYear, isSameDay, isSameMonth } from './helper';
import { Props } from './types';

export const Calendar: React.FC<Props> = React.memo(({ date, onChange, minSelectableDate, maxSelectableDate, ...restProps }) => {
    const today = new Date(),
        [{ month, year }, setMonthAndYear] = useState(getMonthAndYearFromDate(date || today)),
        { month: minMonth, year: minYear } = getMonthAndYearFromDate(minSelectableDate),
        { month: maxMonth, year: maxYear } = getMonthAndYearFromDate(maxSelectableDate);

    const handleDateChange = useCallback((newDate: Date) => () => onChange(newDate), [onChange]),
        handleNextBtnClick = useCallback(() => setMonthAndYear(getNextMonthAndYear(month, year)), [month, year]),
        handlePreviousBtnClick = useCallback(() => setMonthAndYear(getPreviousMonthAndYear(month, year)), [month, year]),
        handleMonthChange = useCallback((value: number) => setMonthAndYear(prev => ({ year: prev.year, month: value })), []),
        handleYearChange = useCallback((value: number) => setMonthAndYear(prev => ({ month: prev.month, year: value })), []),
        isPrevBtnDisabled = useMemo(() => year === minYear && month === minMonth, [month, year, minMonth, minYear]),
        isNextBtnDisabled = useMemo(() => year === maxYear && month === maxMonth, [month, year, maxMonth, maxYear]);

    const weekDays = useMemo(() => WEEK_DAYS.map(label => <Text key={label}>{label}</Text>), []),
        monthOptions = useMemo(
            () =>
                CALENDAR_MONTHS.reduce((acc, curr, index) => {
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
                    (firstDayOfCurrentMonth < maxSelectableDate && lastDayOfCurrentMonth > minSelectableDate ? today : minSelectableDate)
            )
        );
    }, [date, minSelectableDate, maxSelectableDate]);

    useEffect(() => {
        // If selected month is not allowed in the newly selected year then change month to first option in the months option
        const nonDisabledMonths = monthOptions.filter(option => !option.disabled).map(options => options.value);
        !nonDisabledMonths.includes(month) && setMonthAndYear({ year, month: nonDisabledMonths[0] });
    }, [year]);

    return (
        <Card variant="solid" {...restProps}>
            <Styled.Header>
                <Button variant="flat" disabled={isPrevBtnDisabled} onClick={handlePreviousBtnClick}>{`<`}</Button>
                <Text textVariant="h3">{`${CALENDAR_MONTHS[month]} ${year}`}</Text>
                <Button variant="flat" disabled={isNextBtnDisabled} onClick={handleNextBtnClick}>{`>`}</Button>
            </Styled.Header>
            <Styled.MonthAndYearSelection>
                <SingleSelect
                    id={`${restProps.id}-month-selector`}
                    value={month}
                    options={monthOptions}
                    onChange={handleMonthChange}
                    placeholder="Month"
                />
                <SingleSelect
                    id={`${restProps.id}-year-selector`}
                    value={year}
                    options={yearOptions}
                    onChange={handleYearChange}
                    placeholder="Year"
                />
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
                            disabled={_date > maxSelectableDate || _date < minSelectableDate}
                            onClick={handleDateChange(_date)}
                        >
                            <Text>{_date.getDate()}</Text>
                        </Styled.Date>
                    );
                })}
            </Styled.CalendarGrid>
        </Card>
    );
});
Calendar.displayName = 'Calendar';
Calendar.defaultProps = {
    date: null,
    minSelectableDate: new Date(1901, 0, 1),
    maxSelectableDate: new Date(2100, 11, 1)
};
