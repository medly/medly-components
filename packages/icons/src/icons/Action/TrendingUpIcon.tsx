import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TrendingUpIconSvg from '../../assets/Action/trending_up_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TrendingUpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TrendingUpIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TrendingUpIcon.Style = SvgIcon;
TrendingUpIcon.displayName = 'TrendingUpIcon';

export default TrendingUpIcon
