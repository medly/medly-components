import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ImageAspectRatioIconSvg from '../../assets/Image/image_aspect_ratio_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ImageAspectRatioIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ImageAspectRatioIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ImageAspectRatioIcon.Style = SvgIcon;
ImageAspectRatioIcon.displayName = 'ImageAspectRatioIcon';

export default ImageAspectRatioIcon
