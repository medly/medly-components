import { Text } from '@medly-components/core';
import { BurgerIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { useState } from 'react';
import NavItem from './NavItem';
import NavList from './NavList';
import { SideNavIconStyled, SideNavStyled } from './SideNav.styled';
import { SideNavStaticProps } from './types';

export const SideNav: React.SFC & WithStyle & SideNavStaticProps = props => {
    const [open, setOpenState] = useState(false);

    const burgerIconClickHandler = (state: boolean) => {
        setOpenState(state);
    };

    return (
        <SideNavStyled open={open} position="left">
            <SideNavIconStyled>
                <BurgerIcon size="S" onClick={burgerIconClickHandler} />
            </SideNavIconStyled>
            <NavList>{props.children}</NavList>
        </SideNavStyled>
    );
};

SideNav.NavItem = NavItem;
SideNav.NavIcon = SideNavIconStyled;
SideNav.NavText = Text;

SideNav.displayName = 'SideNav';
SideNav.Style = SideNavStyled;

export default SideNav;
