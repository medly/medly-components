import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BubbleChartIconSvg from '../../assets/Editor/bubble_chart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BubbleChartIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BubbleChartIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BubbleChartIcon.Style = SvgIcon;
BubbleChartIcon.displayName = 'BubbleChartIcon';

export default BubbleChartIcon
