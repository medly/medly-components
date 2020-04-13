import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NotificationsActiveIconSvg from '../../assets/Social/notifications_active_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NotificationsActiveIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NotificationsActiveIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NotificationsActiveIcon.Style = SvgIcon;
NotificationsActiveIcon.displayName = 'NotificationsActiveIcon';

export default NotificationsActiveIcon
