import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1875119LineIconSvg from '../../assets/GSDD/SideEffect_1875_119_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1875119LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1875119LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1875119LineIcon.Style = SvgIcon;
SideEffect1875119LineIcon.displayName = 'SideEffect1875119LineIcon';

export default SideEffect1875119LineIcon
