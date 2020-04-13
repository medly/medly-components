import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PieChartOutlineIconSvg from '../../assets/Editor/pie_chart_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PieChartOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PieChartOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PieChartOutlineIcon.Style = SvgIcon;
PieChartOutlineIcon.displayName = 'PieChartOutlineIcon';

export default PieChartOutlineIcon
