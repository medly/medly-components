import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '@medly-components/icons';
import React, { FC } from 'react';
import Calendar from '../../Calendar';
import * as CalendarStyled from '../../Calendar/Calendar.styled';
import * as Styled from '../DateRangePicker.styled';
import { Props } from './types';

export const DateRangeCalendar: FC<Props> = React.memo(props => {
    const { size, startMonth, endMonth, id, startDate, endDate, ...restProps } = props;
    return (
        <Styled.CalendarWrapper size={size}>
            <Styled.DateRangeNavContainer>
                <Styled.DateRangeNav>
                    <CalendarStyled.MonthNavigation className="navigation-go-back" disabled={false} /* onClick={() => {}} */>
                        <KeyboardArrowLeftIcon />
                    </CalendarStyled.MonthNavigation>
                    <Styled.DateRangeNavText>{startMonth}</Styled.DateRangeNavText>
                </Styled.DateRangeNav>
                <Calendar id={`${id}-from-calendar`} date={startDate} {...restProps} />
            </Styled.DateRangeNavContainer>
            <Styled.DateRangeNavContainer>
                <Styled.DateRangeNav>
                    <Styled.DateRangeNavText>{endMonth}</Styled.DateRangeNavText>
                    <CalendarStyled.MonthNavigation className="navigation-go-forward" disabled={false} /* onClick={() => {}} */>
                        <KeyboardArrowRightIcon />
                    </CalendarStyled.MonthNavigation>
                </Styled.DateRangeNav>
                <Calendar id={`${id}-to-calendar`} date={endDate} {...restProps} />
            </Styled.DateRangeNavContainer>
        </Styled.CalendarWrapper>
    );
});
DateRangeCalendar.displayName = 'DateRangeCalendar';
