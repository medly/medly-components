import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PlaylistAddIconSvg from '../../assets/Media/playlist_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlaylistAddIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PlaylistAddIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PlaylistAddIcon.Style = SvgIcon;
PlaylistAddIcon.displayName = 'PlaylistAddIcon';

export default PlaylistAddIcon
