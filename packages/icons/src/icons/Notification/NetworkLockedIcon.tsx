import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NetworkLockedIconSvg from '../../assets/Notification/network_locked_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NetworkLockedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NetworkLockedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NetworkLockedIcon.Style = SvgIcon;
NetworkLockedIcon.displayName = 'NetworkLockedIcon';

export default NetworkLockedIcon
