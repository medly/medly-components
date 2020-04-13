import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PortableWifiOffIconSvg from '../../assets/Communication/portable_wifi_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PortableWifiOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PortableWifiOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PortableWifiOffIcon.Style = SvgIcon;
PortableWifiOffIcon.displayName = 'PortableWifiOffIcon';

export default PortableWifiOffIcon
