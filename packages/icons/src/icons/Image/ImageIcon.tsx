import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ImageIconSvg from '../../assets/Image/image_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ImageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ImageIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ImageIcon.Style = SvgIcon;
ImageIcon.displayName = 'ImageIcon';

export default ImageIcon
