import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BatteryFullIconSvg from '../../assets/Device/battery_full_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BatteryFullIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BatteryFullIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BatteryFullIcon.Style = SvgIcon;
BatteryFullIcon.displayName = 'BatteryFullIcon';

export default BatteryFullIcon
