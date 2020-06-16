import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SignalWifiStatusbarNotConnected26x24pxRoundedIconSvg from '../../assets/Device/signal_wifi_statusbar_not_connected_26x24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalWifiStatusbarNotConnected26x24pxRoundedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SignalWifiStatusbarNotConnected26x24pxRoundedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SignalWifiStatusbarNotConnected26x24pxRoundedIcon.Style = SvgIcon;
SignalWifiStatusbarNotConnected26x24pxRoundedIcon.displayName = 'SignalWifiStatusbarNotConnected26x24pxRoundedIcon';

export default SignalWifiStatusbarNotConnected26x24pxRoundedIcon
