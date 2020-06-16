import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SignalCellularConnectedNoInternet4BarIconSvg from '../../assets/Device/signal_cellular_connected_no_internet_4_bar_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalCellularConnectedNoInternet4BarIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SignalCellularConnectedNoInternet4BarIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SignalCellularConnectedNoInternet4BarIcon.Style = SvgIcon;
SignalCellularConnectedNoInternet4BarIcon.displayName = 'SignalCellularConnectedNoInternet4BarIcon';

export default SignalCellularConnectedNoInternet4BarIcon
