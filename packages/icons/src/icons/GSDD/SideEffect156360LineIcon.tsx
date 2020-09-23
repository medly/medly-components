import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect156360LineIconSvg from '../../assets/GSDD/SideEffect_1563_60_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect156360LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect156360LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect156360LineIcon.Style = SvgIcon;
SideEffect156360LineIcon.displayName = 'SideEffect156360LineIcon';

export default SideEffect156360LineIcon
