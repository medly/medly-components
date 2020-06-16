import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhotoIconSvg from '../../assets/Image/photo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhotoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhotoIcon.Style = SvgIcon;
PhotoIcon.displayName = 'PhotoIcon';

export default PhotoIcon
