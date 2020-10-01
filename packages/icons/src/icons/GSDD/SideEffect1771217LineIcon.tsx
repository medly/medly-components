import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1771217LineIconSvg from '../../assets/GSDD/SideEffect_1771_217_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1771217LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1771217LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1771217LineIcon.Style = SvgIcon;
SideEffect1771217LineIcon.displayName = 'SideEffect1771217LineIcon';

export default SideEffect1771217LineIcon
