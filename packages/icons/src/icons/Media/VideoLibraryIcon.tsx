import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VideoLibraryIconSvg from '../../assets/Media/video_library_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VideoLibraryIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VideoLibraryIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VideoLibraryIcon.Style = SvgIcon;
VideoLibraryIcon.displayName = 'VideoLibraryIcon';

export default VideoLibraryIcon
