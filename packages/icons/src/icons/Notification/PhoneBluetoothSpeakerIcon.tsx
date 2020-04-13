import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhoneBluetoothSpeakerIconSvg from '../../assets/Notification/phone_bluetooth_speaker_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhoneBluetoothSpeakerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhoneBluetoothSpeakerIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhoneBluetoothSpeakerIcon.Style = SvgIcon;
PhoneBluetoothSpeakerIcon.displayName = 'PhoneBluetoothSpeakerIcon';

export default PhoneBluetoothSpeakerIcon
