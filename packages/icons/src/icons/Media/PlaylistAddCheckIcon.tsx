import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PlaylistAddCheckIconSvg from '../../assets/Media/playlist_add_check_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlaylistAddCheckIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PlaylistAddCheckIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PlaylistAddCheckIcon.Style = SvgIcon;
PlaylistAddCheckIcon.displayName = 'PlaylistAddCheckIcon';

export default PlaylistAddCheckIcon
