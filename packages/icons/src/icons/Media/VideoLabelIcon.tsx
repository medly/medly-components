import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import VideoLabelIconSvg from '../../assets/Media/video_label_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VideoLabelIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VideoLabelIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VideoLabelIcon.Style = SvgIcon;
VideoLabelIcon.displayName = 'VideoLabelIcon';

export default VideoLabelIcon
