import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ImageAspectRatioIconSvg from '../../assets/Image/image_aspect_ratio_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ImageAspectRatioIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'ImageAspectRatioIcon';

const ImageAspectRatioIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default ImageAspectRatioIcon
