import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect136974LineIconSvg from '../../assets/GSDD/SideEffect_1369_74_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect136974LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect136974LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect136974LineIcon.Style = SvgIcon;
SideEffect136974LineIcon.displayName = 'SideEffect136974LineIcon';

export default SideEffect136974LineIcon
