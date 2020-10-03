import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '@medly-components/icons';
import React, { FC } from 'react';
import Calendar from '../../Calendar';
import * as Styled from './DateRangeCalendar.styled';
import { Props } from './types';

export const DateRangeCalendar: FC<Props> = React.memo(props => {
    const { size, startMonth, endMonth, id, startDate, endDate, placement, ...restProps } = props;
    return (
        <Styled.DateRangePopup size={size} placement={placement}>
            <Styled.CalendarWrapper>
                <Styled.NavigatorIcon align="left">
                    <KeyboardArrowLeftIcon />
                </Styled.NavigatorIcon>
                <Styled.MonthText textVariant="button1" textAlign="center">
                    {startMonth}
                </Styled.MonthText>
                <Calendar id={`${id}-from-calendar`} date={startDate} {...restProps} />
            </Styled.CalendarWrapper>
            <Styled.CalendarWrapper>
                <Styled.MonthText textVariant="button1" textAlign="center">
                    {endMonth}
                </Styled.MonthText>
                <Styled.NavigatorIcon align="right">
                    <KeyboardArrowRightIcon />
                </Styled.NavigatorIcon>
                <Calendar id={`${id}-to-calendar`} date={endDate} {...restProps} />
            </Styled.CalendarWrapper>
        </Styled.DateRangePopup>
    );
});
DateRangeCalendar.displayName = 'DateRangeCalendar';
