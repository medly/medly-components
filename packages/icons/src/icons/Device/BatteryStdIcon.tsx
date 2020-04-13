import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BatteryStdIconSvg from '../../assets/Device/battery_std_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BatteryStdIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BatteryStdIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BatteryStdIcon.Style = SvgIcon;
BatteryStdIcon.displayName = 'BatteryStdIcon';

export default BatteryStdIcon
