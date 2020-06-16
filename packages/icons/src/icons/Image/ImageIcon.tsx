import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ImageIconSvg from '../../assets/Image/image_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ImageIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ImageIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ImageIcon.Style = SvgIcon;
ImageIcon.displayName = 'ImageIcon';

export default ImageIcon
