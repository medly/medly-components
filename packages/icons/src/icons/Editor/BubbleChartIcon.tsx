import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BubbleChartIconSvg from '../../assets/Editor/bubble_chart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BubbleChartIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BubbleChartIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BubbleChartIcon.Style = SvgIcon;
BubbleChartIcon.displayName = 'BubbleChartIcon';

export default BubbleChartIcon
