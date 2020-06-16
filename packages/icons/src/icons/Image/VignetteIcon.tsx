import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import VignetteIconSvg from '../../assets/Image/vignette_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VignetteIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VignetteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VignetteIcon.Style = SvgIcon;
VignetteIcon.displayName = 'VignetteIcon';

export default VignetteIcon
