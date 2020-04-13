import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VpnLockIconSvg from '../../assets/Notification/vpn_lock_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VpnLockIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VpnLockIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VpnLockIcon.Style = SvgIcon;
VpnLockIcon.displayName = 'VpnLockIcon';

export default VpnLockIcon
