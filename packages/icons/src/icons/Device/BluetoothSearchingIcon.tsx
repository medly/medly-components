import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BluetoothSearchingIconSvg from '../../assets/Device/bluetooth_searching_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BluetoothSearchingIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BluetoothSearchingIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BluetoothSearchingIcon.Style = SvgIcon;
BluetoothSearchingIcon.displayName = 'BluetoothSearchingIcon';

export default BluetoothSearchingIcon
