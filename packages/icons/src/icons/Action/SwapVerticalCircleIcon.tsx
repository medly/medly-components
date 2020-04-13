import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SwapVerticalCircleIconSvg from '../../assets/Action/swap_vertical_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SwapVerticalCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SwapVerticalCircleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SwapVerticalCircleIcon.Style = SvgIcon;
SwapVerticalCircleIcon.displayName = 'SwapVerticalCircleIcon';

export default SwapVerticalCircleIcon
