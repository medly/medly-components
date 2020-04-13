import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SwapVerticalCircleIconSvg from '../../assets/Action/swap_vertical_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SwapVerticalCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SwapVerticalCircleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SwapVerticalCircleIcon.Style = SvgIcon;
SwapVerticalCircleIcon.displayName = 'SwapVerticalCircleIcon';

export default SwapVerticalCircleIcon
