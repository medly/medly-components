import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '@medly-components/icons';
import React, { FC } from 'react';
import Calendar from '../../Calendar';
import * as CalendarStyled from '../../Calendar/Calendar.styled';
import * as Styled from '../DateRangePicker.styled';
import { Props } from './types';

export const DateRangeCalendar: FC<Props> = React.memo(props => {
    const { size, startMonth, endMonth, inputId, startDate, endDate, commonCalendarProps } = props;
    return (
        <Styled.CalendarWrapper size={size}>
            <Styled.DateRangeNavContainer>
                <Styled.DateRangeNav>
                    <CalendarStyled.MonthNavigation className="navigation-go-back" disabled={false} /* onClick={() => {}} */>
                        <KeyboardArrowLeftIcon />
                    </CalendarStyled.MonthNavigation>
                    <Styled.DateRangeNavText>{startMonth}</Styled.DateRangeNavText>
                </Styled.DateRangeNav>
                <Calendar id={`${inputId}-from-calendar`} date={startDate} {...commonCalendarProps} />
            </Styled.DateRangeNavContainer>
            <Styled.DateRangeNavContainer>
                <Styled.DateRangeNav>
                    <Styled.DateRangeNavText>{endMonth}</Styled.DateRangeNavText>
                    <CalendarStyled.MonthNavigation className="navigation-go-forward" disabled={false} /* onClick={() => {}} */>
                        <KeyboardArrowRightIcon />
                    </CalendarStyled.MonthNavigation>
                </Styled.DateRangeNav>
                <Calendar id={`${inputId}-to-calendar`} date={endDate} {...commonCalendarProps} />
            </Styled.DateRangeNavContainer>
        </Styled.CalendarWrapper>
    );
});
DateRangeCalendar.displayName = 'DateRangeCalendar';
