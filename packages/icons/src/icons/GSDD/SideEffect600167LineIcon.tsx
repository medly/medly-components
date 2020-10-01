import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect600167LineIconSvg from '../../assets/GSDD/SideEffect_600_167_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect600167LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect600167LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect600167LineIcon.Style = SvgIcon;
SideEffect600167LineIcon.displayName = 'SideEffect600167LineIcon';

export default SideEffect600167LineIcon
