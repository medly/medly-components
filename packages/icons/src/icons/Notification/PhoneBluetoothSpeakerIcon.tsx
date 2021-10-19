import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhoneBluetoothSpeakerIconSvg from '../../assets/Notification/phone_bluetooth_speaker_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhoneBluetoothSpeakerIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'PhoneBluetoothSpeakerIcon';

const PhoneBluetoothSpeakerIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default PhoneBluetoothSpeakerIcon;
