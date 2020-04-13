import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhotoCameraIconSvg from '../../assets/Image/photo_camera_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoCameraIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhotoCameraIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhotoCameraIcon.Style = SvgIcon;
PhotoCameraIcon.displayName = 'PhotoCameraIcon';

export default PhotoCameraIcon
