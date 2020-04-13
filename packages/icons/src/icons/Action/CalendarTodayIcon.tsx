import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CalendarTodayIconSvg from '../../assets/Action/calendar_today_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CalendarTodayIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CalendarTodayIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CalendarTodayIcon.Style = SvgIcon;
CalendarTodayIcon.displayName = 'CalendarTodayIcon';

export default CalendarTodayIcon
