import { Text } from '@medly-components/core';
import { BurgerIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { useState } from 'react';
import NavItem from './NavItem';
import NavList from './NavList';
import * as Styled from './SideNav.styled';
import SubNavList from './SubNavList';
import { SideNavProps, SideNavStaticProps } from './types';

export const SideNav: React.SFC<SideNavProps> & WithStyle & SideNavStaticProps = props => {
    const [open, setOpenState] = useState(false),
        Logo = props.logo;

    const burgerIconClickHandler = () => {
            setOpenState(!open);
        },
        sidenavOpenHandler = () => {
            !open && setOpenState(true);
        };

    return (
        <Styled.SideNav open={open} position="left" data-testid="sidenav">
            <NavItem as="div">
                <Styled.Icon>
                    <BurgerIcon size="S" open={open} onClick={burgerIconClickHandler} />
                </Styled.Icon>
                <Styled.Logo>{Logo && <Logo />}</Styled.Logo>
            </NavItem>
            {React.Children.map(props.children, child => {
                return React.cloneElement(child as any, { sidenavOpenHandler });
            })}
        </Styled.SideNav>
    );
};

SideNav.BottomList = Styled.BottomList;
SideNav.NavList = NavList;
SideNav.SubNavList = SubNavList;
SideNav.NavItem = NavItem;
SideNav.NavIcon = Styled.Icon;
SideNav.NavText = Text;
SideNav.Logo = Styled.Logo;

SideNav.displayName = 'SideNav';
SideNav.Style = Styled.SideNav;

export default SideNav;
