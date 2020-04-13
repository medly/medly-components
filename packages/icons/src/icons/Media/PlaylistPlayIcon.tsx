import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PlaylistPlayIconSvg from '../../assets/Media/playlist_play_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlaylistPlayIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PlaylistPlayIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PlaylistPlayIcon.Style = SvgIcon;
PlaylistPlayIcon.displayName = 'PlaylistPlayIcon';

export default PlaylistPlayIcon
