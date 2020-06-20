import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PieChartIconSvg from '../../assets/Editor/pie_chart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PieChartIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PieChartIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PieChartIcon.Style = SvgIcon;
PieChartIcon.displayName = 'PieChartIcon';

export default PieChartIcon
