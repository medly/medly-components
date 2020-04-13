import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AlbumIconSvg from '../../assets/Media/album_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AlbumIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AlbumIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AlbumIcon.Style = SvgIcon;
AlbumIcon.displayName = 'AlbumIcon';

export default AlbumIcon
