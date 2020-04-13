import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FiberPinIconSvg from '../../assets/Media/fiber_pin_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FiberPinIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FiberPinIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FiberPinIcon.Style = SvgIcon;
FiberPinIcon.displayName = 'FiberPinIcon';

export default FiberPinIcon
