import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import NotificationAddIconSvg from '../../assets/Alert/notification_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NotificationAddIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'NotificationAddIcon';

const NotificationAddIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default NotificationAddIcon;
