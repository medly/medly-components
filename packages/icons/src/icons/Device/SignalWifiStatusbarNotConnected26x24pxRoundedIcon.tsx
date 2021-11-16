import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo } from 'react';
import SignalWifiStatusbarNotConnected26x24pxRoundedIconSvg from '../../assets/Device/signal_wifi_statusbar_not_connected_26x24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SignalWifiStatusbarNotConnected26x24pxRoundedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SignalWifiStatusbarNotConnected26x24pxRoundedIcon';

const SignalWifiStatusbarNotConnected26x24pxRoundedIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SignalWifiStatusbarNotConnected26x24pxRoundedIcon;
