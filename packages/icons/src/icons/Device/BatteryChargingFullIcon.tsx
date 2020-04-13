import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BatteryChargingFullIconSvg from '../../assets/Device/battery_charging_full_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BatteryChargingFullIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BatteryChargingFullIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BatteryChargingFullIcon.Style = SvgIcon;
BatteryChargingFullIcon.displayName = 'BatteryChargingFullIcon';

export default BatteryChargingFullIcon
