import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect319989LineIconSvg from '../../assets/GSDD/SideEffect_3199_89_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect319989LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect319989LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect319989LineIcon.Style = SvgIcon;
SideEffect319989LineIcon.displayName = 'SideEffect319989LineIcon';

export default SideEffect319989LineIcon
