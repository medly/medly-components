import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BatteryAlertIconSvg from '../../assets/Device/battery_alert_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BatteryAlertIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BatteryAlertIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BatteryAlertIcon.Style = SvgIcon;
BatteryAlertIcon.displayName = 'BatteryAlertIcon';

export default BatteryAlertIcon
