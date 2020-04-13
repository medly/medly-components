import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NotificationsNoneIconSvg from '../../assets/Social/notifications_none_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NotificationsNoneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NotificationsNoneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NotificationsNoneIcon.Style = SvgIcon;
NotificationsNoneIcon.displayName = 'NotificationsNoneIcon';

export default NotificationsNoneIcon
