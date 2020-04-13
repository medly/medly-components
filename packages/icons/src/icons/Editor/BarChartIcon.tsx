import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BarChartIconSvg from '../../assets/Editor/bar_chart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BarChartIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BarChartIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BarChartIcon.Style = SvgIcon;
BarChartIcon.displayName = 'BarChartIcon';

export default BarChartIcon
