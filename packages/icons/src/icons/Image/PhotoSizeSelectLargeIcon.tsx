import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhotoSizeSelectLargeIconSvg from '../../assets/Image/photo_size_select_large_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoSizeSelectLargeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhotoSizeSelectLargeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhotoSizeSelectLargeIcon.Style = SvgIcon;
PhotoSizeSelectLargeIcon.displayName = 'PhotoSizeSelectLargeIcon';

export default PhotoSizeSelectLargeIcon
