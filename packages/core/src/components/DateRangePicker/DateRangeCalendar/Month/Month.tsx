import React, { useCallback } from 'react';
import * as CalendarStyled from '../../../Calendar/Calendar.styled';
import { LONG_CALENDAR_MONTHS } from '../../../Calendar/constants';
import { getCalendarDates, isSameDay, isSameMonth } from '../../../Calendar/helper';
import WeekDays from '../../../Calendar/WeekDays';
import Text from '../../../Text';
import * as Styled from './Month.styled';
import { Props } from './types';

export const Month: React.FC<Props> = React.memo(
    ({
        id,
        startDate,
        endDate,
        month,
        year,
        onChange,
        minSelectableDate,
        maxSelectableDate,
        hoveredDate,
        setHoveredDate,
        ...restProps
    }) => {
        const today = new Date(),
            handleDateChange = useCallback((dt: Date) => () => onChange(dt), [onChange]),
            handleMouseOver = useCallback((dt: Date) => () => setHoveredDate(dt), []),
            getClassNames = useCallback(
                (
                    isInActiveMonth: boolean,
                    isInDateRange: boolean,
                    isInDateRangeHover: boolean,
                    isFirstDate: boolean,
                    isLastDate: boolean,
                    isSelectedStartDate: boolean,
                    isSelectedEndDate: boolean
                ) => {
                    return isInActiveMonth
                        ? `${isSelectedStartDate ? 'selectedStartDate' : ''} ${isSelectedEndDate ? 'selectedEndDate' : ''} ${
                              isInDateRange ? 'active' : ''
                          } ${isInDateRangeHover ? 'hoverActive' : ''} ${isFirstDate ? 'start' : ''} ${isLastDate ? 'end' : ''}`.trim()
                        : 'hide';
                },
                []
            );

        return (
            <Styled.Wrapper id={id} {...restProps}>
                <Styled.MonthText id={`${id}-text`} textVariant="button1" textAlign="center">
                    {`${LONG_CALENDAR_MONTHS[month]} ${year}`}
                </Styled.MonthText>
                <Styled.CalendarGrid id={`${id}-grid`}>
                    <WeekDays />
                    {getCalendarDates(month, year).map((dateArray, index) => {
                        const _date = new Date(dateArray[0], dateArray[1], dateArray[2]),
                            isSelected = isSameDay(_date, startDate) || isSameDay(_date, endDate),
                            isSelectedStartDate = isSameDay(_date, startDate),
                            isSelectedEndDate = isSameDay(_date, endDate),
                            isInDateRange = startDate && endDate && _date < endDate && _date > startDate,
                            isInDateRangeHover = startDate && !endDate && _date > startDate && _date < hoveredDate,
                            isInActiveMonth = isSameMonth(_date, new Date(year, month, 1)),
                            isCurrentDate = isSameDay(_date, today),
                            isFirstDate = new Date(year, month, 1).getDate() === _date.getDate(),
                            isLastDate = new Date(year, month + 1, 0).getDate() === _date.getDate();
                        return (
                            <CalendarStyled.Date
                                key={index}
                                className={getClassNames(
                                    isInActiveMonth,
                                    isInDateRange,
                                    isInDateRangeHover,
                                    isFirstDate,
                                    isLastDate,
                                    isSelectedStartDate,
                                    isSelectedEndDate
                                )}
                                title={_date.toDateString()}
                                isInActiveMonth={isInActiveMonth}
                                isSelected={isSelected}
                                isCurrentDate={isCurrentDate}
                                onMouseOver={handleMouseOver(_date)}
                                disabled={_date > maxSelectableDate || _date < minSelectableDate}
                                onClick={handleDateChange(_date)}
                            >
                                <Text>{_date.getDate()}</Text>
                            </CalendarStyled.Date>
                        );
                    })}
                </Styled.CalendarGrid>
            </Styled.Wrapper>
        );
    }
);
Month.displayName = 'Month';
Month.defaultProps = {
    minSelectableDate: new Date(1901, 0, 1),
    maxSelectableDate: new Date(2100, 11, 1)
};
