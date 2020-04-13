import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StopScreenShareIconSvg from '../../assets/Communication/stop_screen_share_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StopScreenShareIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StopScreenShareIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StopScreenShareIcon.Style = SvgIcon;
StopScreenShareIcon.displayName = 'StopScreenShareIcon';

export default StopScreenShareIcon
