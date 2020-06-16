import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BluetoothAudioIconSvg from '../../assets/Notification/bluetooth_audio_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BluetoothAudioIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BluetoothAudioIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BluetoothAudioIcon.Style = SvgIcon;
BluetoothAudioIcon.displayName = 'BluetoothAudioIcon';

export default BluetoothAudioIcon
