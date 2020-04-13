import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MultilineChartIconSvg from '../../assets/Editor/multiline_chart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MultilineChartIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MultilineChartIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MultilineChartIcon.Style = SvgIcon;
MultilineChartIcon.displayName = 'MultilineChartIcon';

export default MultilineChartIcon
