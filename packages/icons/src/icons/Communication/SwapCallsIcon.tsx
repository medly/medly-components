import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SwapCallsIconSvg from '../../assets/Communication/swap_calls_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SwapCallsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SwapCallsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SwapCallsIcon.Style = SvgIcon;
SwapCallsIcon.displayName = 'SwapCallsIcon';

export default SwapCallsIcon
