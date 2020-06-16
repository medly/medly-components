import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NotificationImportantIconSvg from '../../assets/Alert/notification_important_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NotificationImportantIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NotificationImportantIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NotificationImportantIcon.Style = SvgIcon;
NotificationImportantIcon.displayName = 'NotificationImportantIcon';

export default NotificationImportantIcon
