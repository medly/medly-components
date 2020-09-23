import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect3204158LineIconSvg from '../../assets/GSDD/SideEffect_3204_158_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect3204158LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect3204158LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect3204158LineIcon.Style = SvgIcon;
SideEffect3204158LineIcon.displayName = 'SideEffect3204158LineIcon';

export default SideEffect3204158LineIcon
