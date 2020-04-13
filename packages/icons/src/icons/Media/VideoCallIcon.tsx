import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VideoCallIconSvg from '../../assets/Media/video_call_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VideoCallIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VideoCallIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VideoCallIcon.Style = SvgIcon;
VideoCallIcon.displayName = 'VideoCallIcon';

export default VideoCallIcon
