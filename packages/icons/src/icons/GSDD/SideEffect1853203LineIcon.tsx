import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1853203LineIconSvg from '../../assets/GSDD/SideEffect_1853_203_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1853203LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1853203LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1853203LineIcon.Style = SvgIcon;
SideEffect1853203LineIcon.displayName = 'SideEffect1853203LineIcon';

export default SideEffect1853203LineIcon
