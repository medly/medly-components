import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NetworkCheckIconSvg from '../../assets/Notification/network_check_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NetworkCheckIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NetworkCheckIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NetworkCheckIcon.Style = SvgIcon;
NetworkCheckIcon.displayName = 'NetworkCheckIcon';

export default NetworkCheckIcon
