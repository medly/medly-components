import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect318717LineIconSvg from '../../assets/GSDD/SideEffect_3187_17_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect318717LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect318717LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect318717LineIcon.Style = SvgIcon;
SideEffect318717LineIcon.displayName = 'SideEffect318717LineIcon';

export default SideEffect318717LineIcon
