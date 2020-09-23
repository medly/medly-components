import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect3254432LineIconSvg from '../../assets/GSDD/SideEffect_3254_432_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect3254432LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect3254432LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect3254432LineIcon.Style = SvgIcon;
SideEffect3254432LineIcon.displayName = 'SideEffect3254432LineIcon';

export default SideEffect3254432LineIcon
