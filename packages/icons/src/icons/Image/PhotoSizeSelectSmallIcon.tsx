import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhotoSizeSelectSmallIconSvg from '../../assets/Image/photo_size_select_small_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoSizeSelectSmallIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhotoSizeSelectSmallIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhotoSizeSelectSmallIcon.Style = SvgIcon;
PhotoSizeSelectSmallIcon.displayName = 'PhotoSizeSelectSmallIcon';

export default PhotoSizeSelectSmallIcon
