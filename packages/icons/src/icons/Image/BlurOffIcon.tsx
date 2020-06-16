import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BlurOffIconSvg from '../../assets/Image/blur_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BlurOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BlurOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BlurOffIcon.Style = SvgIcon;
BlurOffIcon.displayName = 'BlurOffIcon';

export default BlurOffIcon
