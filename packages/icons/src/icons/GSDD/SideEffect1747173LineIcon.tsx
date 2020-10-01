import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1747173LineIconSvg from '../../assets/GSDD/SideEffect_1747_173_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1747173LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1747173LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1747173LineIcon.Style = SvgIcon;
SideEffect1747173LineIcon.displayName = 'SideEffect1747173LineIcon';

export default SideEffect1747173LineIcon
