import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhotoSizeSelectActualIconSvg from '../../assets/Image/photo_size_select_actual_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoSizeSelectActualIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhotoSizeSelectActualIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhotoSizeSelectActualIcon.Style = SvgIcon;
PhotoSizeSelectActualIcon.displayName = 'PhotoSizeSelectActualIcon';

export default PhotoSizeSelectActualIcon
