import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect3251391LineIconSvg from '../../assets/GSDD/SideEffect_3251_391_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect3251391LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect3251391LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect3251391LineIcon.Style = SvgIcon;
SideEffect3251391LineIcon.displayName = 'SideEffect3251391LineIcon';

export default SideEffect3251391LineIcon
