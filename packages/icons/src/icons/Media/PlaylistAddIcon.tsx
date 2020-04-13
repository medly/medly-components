import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PlaylistAddIconSvg from '../../assets/Media/playlist_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlaylistAddIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PlaylistAddIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PlaylistAddIcon.Style = SvgIcon;
PlaylistAddIcon.displayName = 'PlaylistAddIcon';

export default PlaylistAddIcon
