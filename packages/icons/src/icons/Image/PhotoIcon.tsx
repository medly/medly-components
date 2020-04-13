import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhotoIconSvg from '../../assets/Image/photo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhotoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhotoIcon.Style = SvgIcon;
PhotoIcon.displayName = 'PhotoIcon';

export default PhotoIcon
