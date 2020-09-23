import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1695178LineIconSvg from '../../assets/GSDD/SideEffect_1695_178_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1695178LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1695178LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1695178LineIcon.Style = SvgIcon;
SideEffect1695178LineIcon.displayName = 'SideEffect1695178LineIcon';

export default SideEffect1695178LineIcon
