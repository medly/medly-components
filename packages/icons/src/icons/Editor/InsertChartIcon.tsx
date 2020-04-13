import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InsertChartIconSvg from '../../assets/Editor/insert_chart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InsertChartIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InsertChartIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

InsertChartIcon.Style = SvgIcon;
InsertChartIcon.displayName = 'InsertChartIcon';

export default InsertChartIcon
