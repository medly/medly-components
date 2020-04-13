import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PortableWifiOffIconSvg from '../../assets/Communication/portable_wifi_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PortableWifiOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PortableWifiOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PortableWifiOffIcon.Style = SvgIcon;
PortableWifiOffIcon.displayName = 'PortableWifiOffIcon';

export default PortableWifiOffIcon
