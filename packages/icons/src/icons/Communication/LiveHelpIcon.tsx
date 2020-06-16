import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LiveHelpIconSvg from '../../assets/Communication/live_help_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LiveHelpIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LiveHelpIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LiveHelpIcon.Style = SvgIcon;
LiveHelpIcon.displayName = 'LiveHelpIcon';

export default LiveHelpIcon
