import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WifiIconSvg from '../../assets/Notification/wifi_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WifiIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WifiIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WifiIcon.Style = SvgIcon;
WifiIcon.displayName = 'WifiIcon';

export default WifiIcon
