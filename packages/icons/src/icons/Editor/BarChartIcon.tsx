import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BarChartIconSvg from '../../assets/Editor/bar_chart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BarChartIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BarChartIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BarChartIcon.Style = SvgIcon;
BarChartIcon.displayName = 'BarChartIcon';

export default BarChartIcon
