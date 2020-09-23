import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1426134LineIconSvg from '../../assets/GSDD/SideEffect_1426_134_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1426134LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1426134LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1426134LineIcon.Style = SvgIcon;
SideEffect1426134LineIcon.displayName = 'SideEffect1426134LineIcon';

export default SideEffect1426134LineIcon
