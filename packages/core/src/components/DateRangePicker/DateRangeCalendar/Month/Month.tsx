import { endOfDay, endOfWeek, startOfWeek } from 'date-fns';
import type { FCC, MouseEvent } from 'react';
import { memo, useCallback } from 'react';
import * as CalendarStyled from '../../../Calendar/Calendar.styled';
import WeekDays from '../../../Calendar/WeekDays';
import { LONG_CALENDAR_MONTHS } from '../../../Calendar/constants';
import { getCalendarDates, isSameDay, isSameMonth, isValidDate } from '../../../Calendar/helper';
import Text from '../../../Text';
import * as Styled from './Styled';
import { Props } from './types';

export const Month: FCC<Props> = memo(
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
        hideMonthText,
        ...restProps
    }) => {
        const today = new Date(),
            handleDateChange = useCallback(
                (dt: Date) => (event: MouseEvent) => {
                    event.stopPropagation();
                    onChange(dt);
                },
                [onChange]
            ),
            handleMouseOver = useCallback((dt: Date | null) => () => dt && setHoveredDate && setHoveredDate(dt), []);

        return (
            <Styled.Wrapper id={id} {...restProps}>
                {!hideMonthText && (
                    <Styled.MonthText id={`${id}-text`} textVariant="button1" textAlign="center">
                        {`${LONG_CALENDAR_MONTHS[month]} ${year}`}
                    </Styled.MonthText>
                )}
                <CalendarStyled.CalendarGrid id={`${id}-grid`}>
                    <WeekDays />
                    {getCalendarDates(month, year).map((dateArray, index) => {
                        const _date = new Date(dateArray[0], dateArray[1], dateArray[2]),
                            isSelected = isSameDay(_date, startDate) || isSameDay(_date, endDate),
                            isSelectedStartDate = isSameDay(_date, startDate),
                            isSelectedEndDate = isSameDay(_date, endDate),
                            isInDateRange = !!(startDate && endDate && _date < endDate && _date > startDate),
                            isInDateRangeHover = !!(
                                hoveredDate &&
                                ((startDate &&
                                    !endDate &&
                                    ((_date > startDate && _date < hoveredDate) || (_date > hoveredDate && _date < startDate))) ||
                                    (!startDate &&
                                        endDate &&
                                        ((_date < endDate && _date > hoveredDate) || (_date > endDate && _date < hoveredDate))))
                            ),
                            isInActiveMonth: boolean = isSameMonth(_date, new Date(year, month, 1)),
                            isCurrentDate: boolean = isSameDay(_date, today),
                            isMonthFirstDate = new Date(year, month, 1).getDate() === _date.getDate(),
                            isMonthLastDate: boolean = new Date(year, month + 1, 0).getDate() === _date.getDate(),
                            isWeekFirstDate: boolean = isSameDay(_date, startOfWeek(_date)),
                            isWeekLastDate: boolean = isSameDay(_date, endOfWeek(_date)),
                            isHoverDateAfterDateSelection: boolean = !!(startDate && !endDate) || !!(!startDate && endDate),
                            disabled: boolean =
                                (maxSelectableDate && _date > maxSelectableDate) ||
                                (minSelectableDate && endOfDay(_date) < minSelectableDate) ||
                                false;

                        return (
                            <Styled.DateContainer
                                key={index}
                                isInActiveMonth={isInActiveMonth}
                                disabled={disabled}
                                isCurrentDate={isCurrentDate}
                                isSelected={isSelected}
                                isStartDateNotSelected={!isValidDate(startDate)}
                                isEndDateNotSelected={!isValidDate(endDate)}
                                isInDateRangeHover={isInDateRangeHover}
                                isInDateRange={isInDateRange}
                                isSelectedStartDate={isSelectedStartDate}
                                isSelectedEndDate={isSelectedEndDate}
                                isHoverDateAfterDateSelection={isHoverDateAfterDateSelection}
                                isMonthFirstDate={isMonthFirstDate}
                                isMonthLastDate={isMonthLastDate}
                                isWeekFirstDate={isWeekFirstDate}
                                isWeekLastDate={isWeekLastDate}
                                onClick={!disabled ? handleDateChange(_date) : undefined}
                                onMouseOver={!disabled ? handleMouseOver(_date) : undefined}
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
