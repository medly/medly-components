import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NotificationsPausedIconSvg from '../../assets/Social/notifications_paused_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NotificationsPausedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NotificationsPausedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NotificationsPausedIcon.Style = SvgIcon;
NotificationsPausedIcon.displayName = 'NotificationsPausedIcon';

export default NotificationsPausedIcon
