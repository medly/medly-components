import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NotificationAddIconSvg from '../../assets/Alert/notification_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NotificationAddIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NotificationAddIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NotificationAddIcon.Style = SvgIcon;
NotificationAddIcon.displayName = 'NotificationAddIcon';

export default NotificationAddIcon
