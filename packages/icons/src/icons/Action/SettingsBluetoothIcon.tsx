import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsBluetoothIconSvg from '../../assets/Action/settings_bluetooth_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsBluetoothIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsBluetoothIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsBluetoothIcon.Style = SvgIcon;
SettingsBluetoothIcon.displayName = 'SettingsBluetoothIcon';

export default SettingsBluetoothIcon
