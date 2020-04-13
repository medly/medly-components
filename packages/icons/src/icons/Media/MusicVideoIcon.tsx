import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MusicVideoIconSvg from '../../assets/Media/music_video_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MusicVideoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MusicVideoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MusicVideoIcon.Style = SvgIcon;
MusicVideoIcon.displayName = 'MusicVideoIcon';

export default MusicVideoIcon
