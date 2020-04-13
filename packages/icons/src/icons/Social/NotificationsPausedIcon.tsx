import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NotificationsPausedIconSvg from '../../assets/Social/notifications_paused_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NotificationsPausedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NotificationsPausedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NotificationsPausedIcon.Style = SvgIcon;
NotificationsPausedIcon.displayName = 'NotificationsPausedIcon';

export default NotificationsPausedIcon
