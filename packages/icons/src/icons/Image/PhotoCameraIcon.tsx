import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhotoCameraIconSvg from '../../assets/Image/photo_camera_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoCameraIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhotoCameraIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhotoCameraIcon.Style = SvgIcon;
PhotoCameraIcon.displayName = 'PhotoCameraIcon';

export default PhotoCameraIcon
