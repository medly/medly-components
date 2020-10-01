import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1590372LineIconSvg from '../../assets/GSDD/SideEffect_1590_372_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1590372LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1590372LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1590372LineIcon.Style = SvgIcon;
SideEffect1590372LineIcon.displayName = 'SideEffect1590372LineIcon';

export default SideEffect1590372LineIcon
