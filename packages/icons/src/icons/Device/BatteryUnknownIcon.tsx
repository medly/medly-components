import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BatteryUnknownIconSvg from '../../assets/Device/battery_unknown_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BatteryUnknownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BatteryUnknownIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BatteryUnknownIcon.Style = SvgIcon;
BatteryUnknownIcon.displayName = 'BatteryUnknownIcon';

export default BatteryUnknownIcon
