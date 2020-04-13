import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NotificationsIconSvg from '../../assets/Social/notifications_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NotificationsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NotificationsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NotificationsIcon.Style = SvgIcon;
NotificationsIcon.displayName = 'NotificationsIcon';

export default NotificationsIcon
