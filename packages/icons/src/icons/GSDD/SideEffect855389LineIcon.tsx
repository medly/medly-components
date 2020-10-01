import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect855389LineIconSvg from '../../assets/GSDD/SideEffect_855_389_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect855389LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect855389LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect855389LineIcon.Style = SvgIcon;
SideEffect855389LineIcon.displayName = 'SideEffect855389LineIcon';

export default SideEffect855389LineIcon
