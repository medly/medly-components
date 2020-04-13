import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhotoLibraryIconSvg from '../../assets/Image/photo_library_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoLibraryIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhotoLibraryIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhotoLibraryIcon.Style = SvgIcon;
PhotoLibraryIcon.displayName = 'PhotoLibraryIcon';

export default PhotoLibraryIcon
