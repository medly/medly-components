import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NotificationAddIconSvg from '../../assets/Alert/notification_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NotificationAddIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NotificationAddIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NotificationAddIcon.Style = SvgIcon;
NotificationAddIcon.displayName = 'NotificationAddIcon';

export default NotificationAddIcon
