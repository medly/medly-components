import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhotoAlbumIconSvg from '../../assets/Image/photo_album_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoAlbumIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhotoAlbumIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhotoAlbumIcon.Style = SvgIcon;
PhotoAlbumIcon.displayName = 'PhotoAlbumIcon';

export default PhotoAlbumIcon
