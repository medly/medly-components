import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MenuExpandIconSvg from '../../assets/Custom/menu_expand_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MenuExpandIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MenuExpandIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MenuExpandIcon.Style = SvgIcon;
MenuExpandIcon.displayName = 'MenuExpandIcon';

export default MenuExpandIcon
