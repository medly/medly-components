import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SdCardAlertIconSvg from '../../assets/Notification/sd_card_alert_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SdCardAlertIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SdCardAlertIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SdCardAlertIcon.Style = SvgIcon;
SdCardAlertIcon.displayName = 'SdCardAlertIcon';

export default SdCardAlertIcon
