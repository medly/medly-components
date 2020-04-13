import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BlurLinearIconSvg from '../../assets/Image/blur_linear_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BlurLinearIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BlurLinearIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BlurLinearIcon.Style = SvgIcon;
BlurLinearIcon.displayName = 'BlurLinearIcon';

export default BlurLinearIcon
