import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect2300248LineIconSvg from '../../assets/GSDD/SideEffect_2300_248_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect2300248LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect2300248LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect2300248LineIcon.Style = SvgIcon;
SideEffect2300248LineIcon.displayName = 'SideEffect2300248LineIcon';

export default SideEffect2300248LineIcon
