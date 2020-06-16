import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GradientIconSvg from '../../assets/Image/gradient_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GradientIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GradientIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GradientIcon.Style = SvgIcon;
GradientIcon.displayName = 'GradientIcon';

export default GradientIcon
