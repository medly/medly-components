import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo } from 'react';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';
import SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIconSvg from '../../assets/Device/signal_wifi_statusbar_connected_no_internet_26x24px_rounded.svg';

const Component: FCC<SvgIconProps> = memo(props => {
    const { size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps } = props;
    return (
        <SvgIcon
            {...{ size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps }}
        >
            <SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIcon';

const SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIcon: FCC<SvgIconProps> & WithStyle = Object.assign(Component, {
    Style: SvgIcon
});

export default SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIcon;
