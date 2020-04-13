import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CalendarViewDayIconSvg from '../../assets/Action/calendar_view_day_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CalendarViewDayIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CalendarViewDayIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CalendarViewDayIcon.Style = SvgIcon;
CalendarViewDayIcon.displayName = 'CalendarViewDayIcon';

export default CalendarViewDayIcon
