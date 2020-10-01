import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect51998LineIconSvg from '../../assets/GSDD/SideEffect_519_98_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect51998LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect51998LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect51998LineIcon.Style = SvgIcon;
SideEffect51998LineIcon.displayName = 'SideEffect51998LineIcon';

export default SideEffect51998LineIcon
