import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WifiOffIconSvg from '../../assets/Notification/wifi_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WifiOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WifiOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WifiOffIcon.Style = SvgIcon;
WifiOffIcon.displayName = 'WifiOffIcon';

export default WifiOffIcon
