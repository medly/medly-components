import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SignalWifiStatusbarNull26x24pxRoundedIconSvg from '../../assets/Device/signal_wifi_statusbar_null_26x24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SignalWifiStatusbarNull26x24pxRoundedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SignalWifiStatusbarNull26x24pxRoundedIcon';

const SignalWifiStatusbarNull26x24pxRoundedIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default SignalWifiStatusbarNull26x24pxRoundedIcon
