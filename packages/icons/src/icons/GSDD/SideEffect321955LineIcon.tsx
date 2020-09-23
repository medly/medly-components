import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect321955LineIconSvg from '../../assets/GSDD/SideEffect_3219_55_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect321955LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect321955LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect321955LineIcon.Style = SvgIcon;
SideEffect321955LineIcon.displayName = 'SideEffect321955LineIcon';

export default SideEffect321955LineIcon
