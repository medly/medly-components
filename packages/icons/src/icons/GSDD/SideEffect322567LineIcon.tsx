import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect322567LineIconSvg from '../../assets/GSDD/SideEffect_3225_67_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect322567LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect322567LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect322567LineIcon.Style = SvgIcon;
SideEffect322567LineIcon.displayName = 'SideEffect322567LineIcon';

export default SideEffect322567LineIcon
