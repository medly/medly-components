import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BatteryChargingFullIconSvg from '../../assets/Device/battery_charging_full_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BatteryChargingFullIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BatteryChargingFullIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BatteryChargingFullIcon.Style = SvgIcon;
BatteryChargingFullIcon.displayName = 'BatteryChargingFullIcon';

export default BatteryChargingFullIcon
