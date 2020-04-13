import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SdCardAlertIconSvg from '../../assets/Notification/sd_card_alert_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SdCardAlertIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SdCardAlertIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SdCardAlertIcon.Style = SvgIcon;
SdCardAlertIcon.displayName = 'SdCardAlertIcon';

export default SdCardAlertIcon
