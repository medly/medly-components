import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PieChartIconSvg from '../../assets/Editor/pie_chart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PieChartIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PieChartIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PieChartIcon.Style = SvgIcon;
PieChartIcon.displayName = 'PieChartIcon';

export default PieChartIcon
