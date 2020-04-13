import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FeaturedVideoIconSvg from '../../assets/Media/featured_video_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FeaturedVideoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FeaturedVideoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FeaturedVideoIcon.Style = SvgIcon;
FeaturedVideoIcon.displayName = 'FeaturedVideoIcon';

export default FeaturedVideoIcon
