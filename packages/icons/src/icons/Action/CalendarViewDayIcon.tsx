import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CalendarViewDayIconSvg from '../../assets/Action/calendar_view_day_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CalendarViewDayIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CalendarViewDayIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CalendarViewDayIcon.Style = SvgIcon;
CalendarViewDayIcon.displayName = 'CalendarViewDayIcon';

export default CalendarViewDayIcon
