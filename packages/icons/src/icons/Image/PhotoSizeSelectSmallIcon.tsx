import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhotoSizeSelectSmallIconSvg from '../../assets/Image/photo_size_select_small_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoSizeSelectSmallIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhotoSizeSelectSmallIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhotoSizeSelectSmallIcon.Style = SvgIcon;
PhotoSizeSelectSmallIcon.displayName = 'PhotoSizeSelectSmallIcon';

export default PhotoSizeSelectSmallIcon
