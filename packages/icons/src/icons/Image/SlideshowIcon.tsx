import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SlideshowIconSvg from '../../assets/Image/slideshow_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SlideshowIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SlideshowIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SlideshowIcon.Style = SvgIcon;
SlideshowIcon.displayName = 'SlideshowIcon';

export default SlideshowIcon
