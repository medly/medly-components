import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NotificationsOffIconSvg from '../../assets/Social/notifications_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NotificationsOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NotificationsOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NotificationsOffIcon.Style = SvgIcon;
NotificationsOffIcon.displayName = 'NotificationsOffIcon';

export default NotificationsOffIcon
