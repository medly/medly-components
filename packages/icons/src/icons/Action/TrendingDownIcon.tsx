import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TrendingDownIconSvg from '../../assets/Action/trending_down_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TrendingDownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TrendingDownIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TrendingDownIcon.Style = SvgIcon;
TrendingDownIcon.displayName = 'TrendingDownIcon';

export default TrendingDownIcon
