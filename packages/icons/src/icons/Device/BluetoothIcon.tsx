import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BluetoothIconSvg from '../../assets/Device/bluetooth_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BluetoothIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BluetoothIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BluetoothIcon.Style = SvgIcon;
BluetoothIcon.displayName = 'BluetoothIcon';

export default BluetoothIcon
