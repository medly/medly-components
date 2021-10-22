import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SignalCellularConnectedNoInternet4BarIconSvg from '../../assets/Device/signal_cellular_connected_no_internet_4_bar_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SignalCellularConnectedNoInternet4BarIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SignalCellularConnectedNoInternet4BarIcon';

const SignalCellularConnectedNoInternet4BarIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SignalCellularConnectedNoInternet4BarIcon;
