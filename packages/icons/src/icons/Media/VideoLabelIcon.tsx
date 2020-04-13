import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VideoLabelIconSvg from '../../assets/Media/video_label_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VideoLabelIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VideoLabelIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VideoLabelIcon.Style = SvgIcon;
VideoLabelIcon.displayName = 'VideoLabelIcon';

export default VideoLabelIcon
