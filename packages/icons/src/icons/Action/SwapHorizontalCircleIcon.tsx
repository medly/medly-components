import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SwapHorizontalCircleIconSvg from '../../assets/Action/swap_horizontal_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SwapHorizontalCircleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SwapHorizontalCircleIcon';

const SwapHorizontalCircleIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SwapHorizontalCircleIcon;
