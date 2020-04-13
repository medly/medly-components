import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SignalCellularConnectedNoInternet4BarIconSvg from '../../assets/Device/signal_cellular_connected_no_internet_4_bar_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalCellularConnectedNoInternet4BarIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SignalCellularConnectedNoInternet4BarIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SignalCellularConnectedNoInternet4BarIcon.Style = SvgIcon;
SignalCellularConnectedNoInternet4BarIcon.displayName = 'SignalCellularConnectedNoInternet4BarIcon';

export default SignalCellularConnectedNoInternet4BarIcon
