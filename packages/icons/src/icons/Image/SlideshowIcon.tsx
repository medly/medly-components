import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SlideshowIconSvg from '../../assets/Image/slideshow_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SlideshowIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SlideshowIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SlideshowIcon.Style = SvgIcon;
SlideshowIcon.displayName = 'SlideshowIcon';

export default SlideshowIcon
