import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NetworkWifiIconSvg from '../../assets/Device/network_wifi_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NetworkWifiIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NetworkWifiIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NetworkWifiIcon.Style = SvgIcon;
NetworkWifiIcon.displayName = 'NetworkWifiIcon';

export default NetworkWifiIcon
