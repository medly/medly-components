import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1441303LineIconSvg from '../../assets/GSDD/SideEffect_1441_303_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1441303LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1441303LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1441303LineIcon.Style = SvgIcon;
SideEffect1441303LineIcon.displayName = 'SideEffect1441303LineIcon';

export default SideEffect1441303LineIcon
