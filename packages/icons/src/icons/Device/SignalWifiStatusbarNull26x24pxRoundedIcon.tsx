import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SignalWifiStatusbarNull26x24pxRoundedIconSvg from '../../assets/Device/signal_wifi_statusbar_null_26x24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalWifiStatusbarNull26x24pxRoundedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SignalWifiStatusbarNull26x24pxRoundedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SignalWifiStatusbarNull26x24pxRoundedIcon.Style = SvgIcon;
SignalWifiStatusbarNull26x24pxRoundedIcon.displayName = 'SignalWifiStatusbarNull26x24pxRoundedIcon';

export default SignalWifiStatusbarNull26x24pxRoundedIcon
