import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1881219LineIconSvg from '../../assets/GSDD/SideEffect_1881_219_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1881219LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1881219LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1881219LineIcon.Style = SvgIcon;
SideEffect1881219LineIcon.displayName = 'SideEffect1881219LineIcon';

export default SideEffect1881219LineIcon
