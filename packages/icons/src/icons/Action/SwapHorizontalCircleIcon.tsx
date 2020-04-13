import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SwapHorizontalCircleIconSvg from '../../assets/Action/swap_horizontal_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SwapHorizontalCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SwapHorizontalCircleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SwapHorizontalCircleIcon.Style = SvgIcon;
SwapHorizontalCircleIcon.displayName = 'SwapHorizontalCircleIcon';

export default SwapHorizontalCircleIcon
