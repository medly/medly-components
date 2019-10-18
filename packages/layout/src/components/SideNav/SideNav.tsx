import { Text } from '@medly-components/core';
import { BurgerIcon } from '@medly-components/icons';
import { useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { SFC, useRef, useState } from 'react';
import NavItem from './NavItem';
import NavList from './NavList';
import * as Styled from './SideNav.styled';
import SubNavList from './SubNavList';
import { SideNavProps, SideNavStaticProps } from './types';

export const SideNav: SFC<SideNavProps> & WithStyle & SideNavStaticProps = props => {
    const ref = useRef(null);
    const [open, setOpenState] = useState(false),
        Logo = props.logo;

    const burgerIconClickHandler = () => {
            setOpenState(!open);
        },
        sidenavOpenHandler = () => {
            !open && setOpenState(true);
        };

    useOuterClickNotifier(() => {
        props.closeOnOuterClick && setOpenState(false);
    }, ref);

    return (
        <Styled.SideNav open={open} ref={ref} position="left" data-testid="sidenav">
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
SideNav.defaultProps = {
    closeOnOuterClick: false
};
