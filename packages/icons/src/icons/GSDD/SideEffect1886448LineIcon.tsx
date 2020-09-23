import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1886448LineIconSvg from '../../assets/GSDD/SideEffect_1886_448_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1886448LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1886448LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1886448LineIcon.Style = SvgIcon;
SideEffect1886448LineIcon.displayName = 'SideEffect1886448LineIcon';

export default SideEffect1886448LineIcon
