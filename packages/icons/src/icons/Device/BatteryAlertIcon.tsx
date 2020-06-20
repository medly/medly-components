import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BatteryAlertIconSvg from '../../assets/Device/battery_alert_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BatteryAlertIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BatteryAlertIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BatteryAlertIcon.Style = SvgIcon;
BatteryAlertIcon.displayName = 'BatteryAlertIcon';

export default BatteryAlertIcon
