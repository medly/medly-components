import { WithStyle } from '@medly-components/utils/src';
import React, { useMemo } from 'react';
import * as Styled from './DateRangeCalendar.styled';
import Month from './Month';
import { Props } from './types';

export const DateRangeCalendar: React.FC<Props> & WithStyle = React.memo(props => {
    const { size, placement, startDate, endDate, onDateSelection } = props;

    const month = useMemo(() => (startDate || new Date()).getMonth(), [startDate]),
        year = useMemo(() => (startDate || new Date()).getFullYear(), [startDate]);

    return (
        <Styled.DateRangeCalendar size={size} placement={placement}>
            <Month startDate={startDate} endDate={endDate} month={month} year={year} onChange={onDateSelection} />
            <Month startDate={startDate} endDate={endDate} month={month + 1} year={year} onChange={onDateSelection} />
        </Styled.DateRangeCalendar>
    );
});
DateRangeCalendar.displayName = 'DateRangeCalendar';
DateRangeCalendar.Style = Styled.DateRangeCalendar;
