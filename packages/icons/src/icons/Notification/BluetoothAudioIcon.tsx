import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BluetoothAudioIconSvg from '../../assets/Notification/bluetooth_audio_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BluetoothAudioIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BluetoothAudioIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BluetoothAudioIcon.Style = SvgIcon;
BluetoothAudioIcon.displayName = 'BluetoothAudioIcon';

export default BluetoothAudioIcon
