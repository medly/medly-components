import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1856220LineIconSvg from '../../assets/GSDD/SideEffect_1856_220_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1856220LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1856220LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1856220LineIcon.Style = SvgIcon;
SideEffect1856220LineIcon.displayName = 'SideEffect1856220LineIcon';

export default SideEffect1856220LineIcon
