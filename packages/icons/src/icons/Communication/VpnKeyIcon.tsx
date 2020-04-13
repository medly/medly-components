import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VpnKeyIconSvg from '../../assets/Communication/vpn_key_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VpnKeyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VpnKeyIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VpnKeyIcon.Style = SvgIcon;
VpnKeyIcon.displayName = 'VpnKeyIcon';

export default VpnKeyIcon
