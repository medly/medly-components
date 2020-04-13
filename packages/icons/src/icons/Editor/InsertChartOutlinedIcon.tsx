import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InsertChartOutlinedIconSvg from '../../assets/Editor/insert_chart_outlined_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InsertChartOutlinedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <InsertChartOutlinedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

InsertChartOutlinedIcon.Style = SvgIcon;
InsertChartOutlinedIcon.displayName = 'InsertChartOutlinedIcon';

export default InsertChartOutlinedIcon
