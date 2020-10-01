import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1899212LineIconSvg from '../../assets/GSDD/SideEffect_1899_212_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1899212LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1899212LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1899212LineIcon.Style = SvgIcon;
SideEffect1899212LineIcon.displayName = 'SideEffect1899212LineIcon';

export default SideEffect1899212LineIcon
