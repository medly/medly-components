import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VpnLockIconSvg from '../../assets/Notification/vpn_lock_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VpnLockIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VpnLockIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VpnLockIcon.Style = SvgIcon;
VpnLockIcon.displayName = 'VpnLockIcon';

export default VpnLockIcon
