import { endOfDay, endOfWeek, startOfWeek } from 'date-fns';
import React, { useCallback } from 'react';
import * as CalendarStyled from '../../../Calendar/Calendar.styled';
import { LONG_CALENDAR_MONTHS } from '../../../Calendar/constants';
import { getCalendarDates, isSameDay, isSameMonth } from '../../../Calendar/helper';
import WeekDays from '../../../Calendar/WeekDays';
import Text from '../../../Text';
import * as Styled from './Styled';
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
            handleDateChange = useCallback(
                (dt: Date) => (event: React.MouseEvent) => {
                    event.stopPropagation();
                    onChange(dt);
                },
                [onChange]
            ),
            handleMouseOver = useCallback((dt: Date | null) => () => setHoveredDate(dt), []);

        return (
            <Styled.Wrapper id={id} {...restProps}>
                <Styled.MonthText id={`${id}-text`} textVariant="button1" textAlign="center">
                    {`${LONG_CALENDAR_MONTHS[month]} ${year}`}
                </Styled.MonthText>
                <CalendarStyled.CalendarGrid id={`${id}-grid`}>
                    <WeekDays />
                    {getCalendarDates(month, year).map((dateArray, index) => {
                        const _date = new Date(dateArray[0], dateArray[1], dateArray[2]),
                            isSelected = isSameDay(_date, startDate) || isSameDay(_date, endDate),
                            isSelectedStartDate = isSameDay(_date, startDate),
                            isSelectedEndDate = isSameDay(_date, endDate),
                            isInDateRange = startDate && endDate && _date < endDate && _date > startDate,
                            isInDateRangeHover =
                                (startDate &&
                                    !endDate &&
                                    ((_date > startDate && _date < hoveredDate) || (_date > hoveredDate && _date < startDate))) ||
                                (!startDate &&
                                    endDate &&
                                    ((_date < endDate && _date > hoveredDate) || (_date > endDate && _date < hoveredDate))),
                            isInActiveMonth = isSameMonth(_date, new Date(year, month, 1)),
                            isCurrentDate = isSameDay(_date, today),
                            isMonthFirstDate = new Date(year, month, 1).getDate() === _date.getDate(),
                            isMonthLastDate = new Date(year, month + 1, 0).getDate() === _date.getDate(),
                            isWeekFirstDate = isSameDay(_date, startOfWeek(_date)),
                            isWeekLastDate = isSameDay(_date, endOfWeek(_date)),
                            isHoverDateAfterDateSelection = !!(startDate && !endDate) || !!(!startDate && endDate),
                            disabled = _date > maxSelectableDate || endOfDay(_date) < minSelectableDate;

                        return (
                            <Styled.DateContainer
                                key={index}
                                isInActiveMonth={isInActiveMonth}
                                disabled={disabled}
                                isCurrentDate={isCurrentDate}
                                isSelected={isSelected}
                                isStartDateNotSelected={!startDate}
                                isEndDateNotSelected={!endDate}
                                isInDateRangeHover={isInDateRangeHover}
                                isInDateRange={isInDateRange}
                                isSelectedStartDate={isSelectedStartDate}
                                isSelectedEndDate={isSelectedEndDate}
                                isHoverDateAfterDateSelection={isHoverDateAfterDateSelection}
                                isMonthFirstDate={isMonthFirstDate}
                                isMonthLastDate={isMonthLastDate}
                                isWeekFirstDate={isWeekFirstDate}
                                isWeekLastDate={isWeekLastDate}
                                onClick={!disabled && handleDateChange(_date)}
                                onMouseOver={!disabled && handleMouseOver(_date)}
                                onMouseOut={handleMouseOver(null)}
                            >
                                {isInActiveMonth && (
                                    <Styled.Date key={index} title={_date.toDateString()} disabled={disabled} isSelected={isSelected}>
                                        <Text textWeight={isSelected ? 'Strong' : 'Regular'}>{_date.getDate()}</Text>
                                    </Styled.Date>
                                )}
                            </Styled.DateContainer>
                        );
                    })}
                </CalendarStyled.CalendarGrid>
            </Styled.Wrapper>
        );
    }
);
Month.displayName = 'Month';
