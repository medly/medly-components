import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1894410LineIconSvg from '../../assets/GSDD/SideEffect_1894_410_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1894410LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1894410LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1894410LineIcon.Style = SvgIcon;
SideEffect1894410LineIcon.displayName = 'SideEffect1894410LineIcon';

export default SideEffect1894410LineIcon
