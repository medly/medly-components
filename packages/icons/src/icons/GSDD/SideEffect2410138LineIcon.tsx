import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect2410138LineIconSvg from '../../assets/GSDD/SideEffect_2410_138_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect2410138LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect2410138LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect2410138LineIcon.Style = SvgIcon;
SideEffect2410138LineIcon.displayName = 'SideEffect2410138LineIcon';

export default SideEffect2410138LineIcon
