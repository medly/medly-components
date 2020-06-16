import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhotoFilterIconSvg from '../../assets/Image/photo_filter_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhotoFilterIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhotoFilterIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhotoFilterIcon.Style = SvgIcon;
PhotoFilterIcon.displayName = 'PhotoFilterIcon';

export default PhotoFilterIcon
