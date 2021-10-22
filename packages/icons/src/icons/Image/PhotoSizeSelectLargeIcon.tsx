import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhotoSizeSelectLargeIconSvg from '../../assets/Image/photo_size_select_large_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhotoSizeSelectLargeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'PhotoSizeSelectLargeIcon';

const PhotoSizeSelectLargeIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default PhotoSizeSelectLargeIcon;
