import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhotoSizeSelectActualIconSvg from '../../assets/Image/photo_size_select_actual_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoSizeSelectActualIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhotoSizeSelectActualIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhotoSizeSelectActualIcon.Style = SvgIcon;
PhotoSizeSelectActualIcon.displayName = 'PhotoSizeSelectActualIcon';

export default PhotoSizeSelectActualIcon
