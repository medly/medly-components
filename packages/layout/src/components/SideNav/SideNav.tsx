import { useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { SFC, useRef, useState } from 'react';
import BottomList from './BottomList';
import NavIcon from './NavIcon';
import NavItem from './NavItem';
import NavList from './NavList';
import NavText from './NavText';
import OnChangeContext from './OnChangeContext';
import * as Styled from './SideNav.styled';
import SubNavList from './SubNavList';
import TopNavItem from './TopNavItem';
import { SideNavProps, SideNavStaticProps } from './types';

export const SideNav: SFC<SideNavProps> & WithStyle & SideNavStaticProps = props => {
    const { active, children, closeOnOuterClick, defaultActive, logo, onChange } = props;

    const ref = useRef(null),
        [open, setOpenState] = useState(false),
        [activeItem, setActiveItem] = useState(defaultActive || '');

    const burgerIconClickHandler = () => setOpenState(!open),
        sidenavOpenHandler = () => {
            !open && setOpenState(true);
        };

    const handleOnActiveChange = (key: string) => {
        !active && setActiveItem(key);
        onChange && onChange(key);
    };

    useOuterClickNotifier(() => {
        closeOnOuterClick && setOpenState(false);
    }, ref);

    return (
        <Styled.SideNav open={open} ref={ref} position="left" data-testid="sidenav">
            <OnChangeContext.Provider value={[activeItem, handleOnActiveChange]}>
                <TopNavItem {...{ logo, open, burgerIconClickHandler }} />
                {React.Children.map(children, child => {
                    return React.cloneElement(child as any, { sidenavOpenHandler });
                })}
            </OnChangeContext.Provider>
        </Styled.SideNav>
    );
};

SideNav.BottomList = BottomList;
SideNav.NavList = NavList;
SideNav.SubNavList = SubNavList;
SideNav.NavItem = NavItem;
SideNav.NavIcon = NavIcon;
SideNav.NavText = NavText;

SideNav.displayName = 'SideNav';
SideNav.Style = Styled.SideNav;
SideNav.defaultProps = {
    closeOnOuterClick: false
};
