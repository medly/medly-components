import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BluetoothIconSvg from '../../assets/Device/bluetooth_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BluetoothIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BluetoothIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BluetoothIcon.Style = SvgIcon;
BluetoothIcon.displayName = 'BluetoothIcon';

export default BluetoothIcon
