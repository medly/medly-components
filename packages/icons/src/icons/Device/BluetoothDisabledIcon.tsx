import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BluetoothDisabledIconSvg from '../../assets/Device/bluetooth_disabled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BluetoothDisabledIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BluetoothDisabledIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BluetoothDisabledIcon.Style = SvgIcon;
BluetoothDisabledIcon.displayName = 'BluetoothDisabledIcon';

export default BluetoothDisabledIcon
