import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PlaylistAddCheckIconSvg from '../../assets/Media/playlist_add_check_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlaylistAddCheckIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PlaylistAddCheckIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PlaylistAddCheckIcon.Style = SvgIcon;
PlaylistAddCheckIcon.displayName = 'PlaylistAddCheckIcon';

export default PlaylistAddCheckIcon
