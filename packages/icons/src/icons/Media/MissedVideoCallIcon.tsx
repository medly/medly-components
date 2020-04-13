import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MissedVideoCallIconSvg from '../../assets/Media/missed_video_call_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MissedVideoCallIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MissedVideoCallIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MissedVideoCallIcon.Style = SvgIcon;
MissedVideoCallIcon.displayName = 'MissedVideoCallIcon';

export default MissedVideoCallIcon
