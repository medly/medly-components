import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect3212455LineIconSvg from '../../assets/GSDD/SideEffect_3212_455_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect3212455LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect3212455LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect3212455LineIcon.Style = SvgIcon;
SideEffect3212455LineIcon.displayName = 'SideEffect3212455LineIcon';

export default SideEffect3212455LineIcon
