import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhotoFilterIconSvg from '../../assets/Image/photo_filter_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoFilterIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhotoFilterIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhotoFilterIcon.Style = SvgIcon;
PhotoFilterIcon.displayName = 'PhotoFilterIcon';

export default PhotoFilterIcon
