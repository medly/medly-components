import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect2277463LineIconSvg from '../../assets/GSDD/SideEffect_2277_463_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect2277463LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect2277463LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect2277463LineIcon.Style = SvgIcon;
SideEffect2277463LineIcon.displayName = 'SideEffect2277463LineIcon';

export default SideEffect2277463LineIcon
