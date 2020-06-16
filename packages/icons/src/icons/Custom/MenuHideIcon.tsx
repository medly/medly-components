import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MenuHideIconSvg from '../../assets/Custom/menu_hide_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MenuHideIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MenuHideIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MenuHideIcon.Style = SvgIcon;
MenuHideIcon.displayName = 'MenuHideIcon';

export default MenuHideIcon
