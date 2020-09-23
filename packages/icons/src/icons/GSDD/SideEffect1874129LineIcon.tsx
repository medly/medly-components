import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1874129LineIconSvg from '../../assets/GSDD/SideEffect_1874_129_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1874129LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1874129LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1874129LineIcon.Style = SvgIcon;
SideEffect1874129LineIcon.displayName = 'SideEffect1874129LineIcon';

export default SideEffect1874129LineIcon
