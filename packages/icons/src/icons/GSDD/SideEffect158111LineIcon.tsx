import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect158111LineIconSvg from '../../assets/GSDD/SideEffect_1581_11_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect158111LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect158111LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect158111LineIcon.Style = SvgIcon;
SideEffect158111LineIcon.displayName = 'SideEffect158111LineIcon';

export default SideEffect158111LineIcon
