import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1063196LineIconSvg from '../../assets/GSDD/SideEffect_1063_196_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1063196LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1063196LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1063196LineIcon.Style = SvgIcon;
SideEffect1063196LineIcon.displayName = 'SideEffect1063196LineIcon';

export default SideEffect1063196LineIcon
