import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LiveHelpIconSvg from '../../assets/Communication/live_help_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LiveHelpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LiveHelpIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LiveHelpIcon.Style = SvgIcon;
LiveHelpIcon.displayName = 'LiveHelpIcon';

export default LiveHelpIcon
