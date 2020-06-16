import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhotoAlbumIconSvg from '../../assets/Image/photo_album_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoAlbumIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhotoAlbumIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhotoAlbumIcon.Style = SvgIcon;
PhotoAlbumIcon.displayName = 'PhotoAlbumIcon';

export default PhotoAlbumIcon
