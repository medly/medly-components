import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo } from 'react';
import SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIconSvg from '../../assets/Device/signal_wifi_statusbar_connected_no_internet_26x24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIcon';

const SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIcon;
