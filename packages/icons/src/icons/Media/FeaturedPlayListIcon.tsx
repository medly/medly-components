import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FeaturedPlayListIconSvg from '../../assets/Media/featured_play_list_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FeaturedPlayListIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FeaturedPlayListIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FeaturedPlayListIcon.Style = SvgIcon;
FeaturedPlayListIcon.displayName = 'FeaturedPlayListIcon';

export default FeaturedPlayListIcon
