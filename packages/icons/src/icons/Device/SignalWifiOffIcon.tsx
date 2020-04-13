import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SignalWifiOffIconSvg from '../../assets/Device/signal_wifi_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalWifiOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SignalWifiOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SignalWifiOffIcon.Style = SvgIcon;
SignalWifiOffIcon.displayName = 'SignalWifiOffIcon';

export default SignalWifiOffIcon
