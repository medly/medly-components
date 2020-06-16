import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NotificationsActiveIconSvg from '../../assets/Social/notifications_active_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NotificationsActiveIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NotificationsActiveIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NotificationsActiveIcon.Style = SvgIcon;
NotificationsActiveIcon.displayName = 'NotificationsActiveIcon';

export default NotificationsActiveIcon
