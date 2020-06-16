import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ScatterPlotIconSvg from '../../assets/Editor/scatter_plot_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScatterPlotIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ScatterPlotIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ScatterPlotIcon.Style = SvgIcon;
ScatterPlotIcon.displayName = 'ScatterPlotIcon';

export default ScatterPlotIcon
