import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect318827LineIconSvg from '../../assets/GSDD/SideEffect_3188_27_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect318827LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect318827LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect318827LineIcon.Style = SvgIcon;
SideEffect318827LineIcon.displayName = 'SideEffect318827LineIcon';

export default SideEffect318827LineIcon
