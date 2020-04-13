import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BluetoothConnectedIconSvg from '../../assets/Device/bluetooth_connected_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BluetoothConnectedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BluetoothConnectedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BluetoothConnectedIcon.Style = SvgIcon;
BluetoothConnectedIcon.displayName = 'BluetoothConnectedIcon';

export default BluetoothConnectedIcon
