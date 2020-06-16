import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhotoLibraryIconSvg from '../../assets/Image/photo_library_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoLibraryIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhotoLibraryIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhotoLibraryIcon.Style = SvgIcon;
PhotoLibraryIcon.displayName = 'PhotoLibraryIcon';

export default PhotoLibraryIcon
