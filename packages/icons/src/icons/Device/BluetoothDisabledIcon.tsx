import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BluetoothDisabledIconSvg from '../../assets/Device/bluetooth_disabled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BluetoothDisabledIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BluetoothDisabledIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BluetoothDisabledIcon.Style = SvgIcon;
BluetoothDisabledIcon.displayName = 'BluetoothDisabledIcon';

export default BluetoothDisabledIcon
