import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1711130LineIconSvg from '../../assets/GSDD/SideEffect_1711_130_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1711130LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1711130LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1711130LineIcon.Style = SvgIcon;
SideEffect1711130LineIcon.displayName = 'SideEffect1711130LineIcon';

export default SideEffect1711130LineIcon
