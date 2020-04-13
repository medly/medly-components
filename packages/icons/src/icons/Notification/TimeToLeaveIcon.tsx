import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TimeToLeaveIconSvg from '../../assets/Notification/time_to_leave_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TimeToLeaveIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TimeToLeaveIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TimeToLeaveIcon.Style = SvgIcon;
TimeToLeaveIcon.displayName = 'TimeToLeaveIcon';

export default TimeToLeaveIcon
