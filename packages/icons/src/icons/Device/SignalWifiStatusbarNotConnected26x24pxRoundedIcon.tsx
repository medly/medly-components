import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SignalWifiStatusbarNotConnected26x24pxRoundedIconSvg from '../../assets/Device/signal_wifi_statusbar_not_connected_26x24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalWifiStatusbarNotConnected26x24pxRoundedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SignalWifiStatusbarNotConnected26x24pxRoundedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SignalWifiStatusbarNotConnected26x24pxRoundedIcon.Style = SvgIcon;
SignalWifiStatusbarNotConnected26x24pxRoundedIcon.displayName = 'SignalWifiStatusbarNotConnected26x24pxRoundedIcon';

export default SignalWifiStatusbarNotConnected26x24pxRoundedIcon
