import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NetworkLockedIconSvg from '../../assets/Notification/network_locked_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NetworkLockedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NetworkLockedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NetworkLockedIcon.Style = SvgIcon;
NetworkLockedIcon.displayName = 'NetworkLockedIcon';

export default NetworkLockedIcon
