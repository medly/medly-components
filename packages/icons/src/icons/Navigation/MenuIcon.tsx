import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MenuIconSvg from '../../assets/Navigation/menu_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MenuIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MenuIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MenuIcon.Style = SvgIcon;
MenuIcon.displayName = 'MenuIcon';

export default MenuIcon
