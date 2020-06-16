import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BatteryStdIconSvg from '../../assets/Device/battery_std_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BatteryStdIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BatteryStdIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BatteryStdIcon.Style = SvgIcon;
BatteryStdIcon.displayName = 'BatteryStdIcon';

export default BatteryStdIcon
