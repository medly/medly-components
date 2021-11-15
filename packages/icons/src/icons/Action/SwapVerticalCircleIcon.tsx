import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import SwapVerticalCircleIconSvg from '../../assets/Action/swap_vertical_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SwapVerticalCircleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SwapVerticalCircleIcon';

const SwapVerticalCircleIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SwapVerticalCircleIcon;
