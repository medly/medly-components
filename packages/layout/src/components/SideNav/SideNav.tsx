import { Text } from '@medly-components/core';
import { BurgerIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { useState } from 'react';
import NavItem from './NavItem';
import NavList from './NavList';
import { SideNavIconStyled, SideNavStyled } from './SideNav.styled';
import SubNavList from './SubNavList';
import { SideNavStaticProps } from './types';

export const SideNav: React.SFC & WithStyle & SideNavStaticProps = props => {
    const [open, setOpenState] = useState(false);

    const burgerIconClickHandler = () => {
        setOpenState(!open);
    };

    const sidenavOpenHandler = () => {
        !open && setOpenState(true);
    };

    return (
        <SideNavStyled open={open} position="left" data-testid="sidenav">
            <SideNavIconStyled>
                <BurgerIcon size="S" open={open} onClick={burgerIconClickHandler} />
            </SideNavIconStyled>
            <NavList>
                {React.Children.map(props.children, child => {
                    return React.cloneElement(child as any, { sidenavOpenHandler });
                })}
            </NavList>
        </SideNavStyled>
    );
};

SideNav.NavList = NavList;
SideNav.SubNavList = SubNavList;
SideNav.NavItem = NavItem;
SideNav.NavIcon = SideNavIconStyled;
SideNav.NavText = Text;

SideNav.displayName = 'SideNav';
SideNav.Style = SideNavStyled;

export default SideNav;
