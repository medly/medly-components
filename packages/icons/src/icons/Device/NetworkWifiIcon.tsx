import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NetworkWifiIconSvg from '../../assets/Device/network_wifi_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NetworkWifiIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NetworkWifiIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NetworkWifiIcon.Style = SvgIcon;
NetworkWifiIcon.displayName = 'NetworkWifiIcon';

export default NetworkWifiIcon
