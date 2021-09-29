import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import HourglassEmptyIconSvg from '../../assets/Action/hourglass_empty_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HourglassEmptyIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'HourglassEmptyIcon';

const HourglassEmptyIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default HourglassEmptyIcon
