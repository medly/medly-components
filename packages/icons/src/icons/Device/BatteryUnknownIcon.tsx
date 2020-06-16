import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BatteryUnknownIconSvg from '../../assets/Device/battery_unknown_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BatteryUnknownIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BatteryUnknownIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BatteryUnknownIcon.Style = SvgIcon;
BatteryUnknownIcon.displayName = 'BatteryUnknownIcon';

export default BatteryUnknownIcon
