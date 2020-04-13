import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MediaTimerIconSvg from '../../assets/Media/media_timer_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MediaTimerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MediaTimerIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MediaTimerIcon.Style = SvgIcon;
MediaTimerIcon.displayName = 'MediaTimerIcon';

export default MediaTimerIcon
