import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SignalWifiStatusbarNull26x24pxRoundedIconSvg from '../../assets/Device/signal_wifi_statusbar_null_26x24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalWifiStatusbarNull26x24pxRoundedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SignalWifiStatusbarNull26x24pxRoundedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SignalWifiStatusbarNull26x24pxRoundedIcon.Style = SvgIcon;
SignalWifiStatusbarNull26x24pxRoundedIcon.displayName = 'SignalWifiStatusbarNull26x24pxRoundedIcon';

export default SignalWifiStatusbarNull26x24pxRoundedIcon
