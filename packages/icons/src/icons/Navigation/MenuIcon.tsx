import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MenuIconSvg from '../../assets/Navigation/menu_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MenuIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MenuIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MenuIcon.Style = SvgIcon;
MenuIcon.displayName = 'MenuIcon';

export default MenuIcon
