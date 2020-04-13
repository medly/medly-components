import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InsertChartOutlinedIconSvg from '../../assets/Editor/insert_chart_outlined_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InsertChartOutlinedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InsertChartOutlinedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

InsertChartOutlinedIcon.Style = SvgIcon;
InsertChartOutlinedIcon.displayName = 'InsertChartOutlinedIcon';

export default InsertChartOutlinedIcon
