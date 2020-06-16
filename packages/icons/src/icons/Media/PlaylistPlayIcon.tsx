import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PlaylistPlayIconSvg from '../../assets/Media/playlist_play_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlaylistPlayIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PlaylistPlayIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PlaylistPlayIcon.Style = SvgIcon;
PlaylistPlayIcon.displayName = 'PlaylistPlayIcon';

export default PlaylistPlayIcon
