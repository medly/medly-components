import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExploreIconSvg from '../../assets/Action/explore_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExploreIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExploreIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExploreIcon.Style = SvgIcon;
ExploreIcon.displayName = 'ExploreIcon';

export default ExploreIcon
