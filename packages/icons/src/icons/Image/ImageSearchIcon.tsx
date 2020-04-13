import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ImageSearchIconSvg from '../../assets/Image/image_search_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ImageSearchIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ImageSearchIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ImageSearchIcon.Style = SvgIcon;
ImageSearchIcon.displayName = 'ImageSearchIcon';

export default ImageSearchIcon
