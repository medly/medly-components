import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect191623LineIconSvg from '../../assets/GSDD/SideEffect_1916_23_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect191623LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect191623LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect191623LineIcon.Style = SvgIcon;
SideEffect191623LineIcon.displayName = 'SideEffect191623LineIcon';

export default SideEffect191623LineIcon
