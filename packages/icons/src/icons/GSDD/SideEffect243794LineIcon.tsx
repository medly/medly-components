import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect243794LineIconSvg from '../../assets/GSDD/SideEffect_2437_94_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect243794LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect243794LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect243794LineIcon.Style = SvgIcon;
SideEffect243794LineIcon.displayName = 'SideEffect243794LineIcon';

export default SideEffect243794LineIcon
