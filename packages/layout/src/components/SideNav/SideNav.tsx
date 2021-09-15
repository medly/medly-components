import { WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useRef, useState } from 'react';
import NavGroup from './NavGroup';
import NavItem from './NavItem';
import NavList from './NavList';
import SideNavContext from './SideNav.context';
import * as Styled from './SideNav.styled';
import ToggleSwitch from './ToggleSwitch';
import { SideNavProps, SideNavStaticProps } from './types';

export const SideNav: FC<SideNavProps> & WithStyle & SideNavStaticProps = props => {
    const { active, children, defaultActive, onChange, hideShadow, defaultOpen } = props,
        id = props.id || 'medly-sidenav';

    const ref = useRef(null),
        [isHovered, setHoveredState] = useState(false),
        [isExpanded, setExpandedState] = useState(defaultOpen ?? (typeof window !== 'undefined' && window.innerWidth > 1024)),
        [activeItem, setActiveItem] = useState(defaultActive || '');

    const openSidenav = useCallback(() => !isExpanded && setHoveredState(true), [isExpanded]),
        closeSidenav = useCallback(() => !isExpanded && setHoveredState(false), [isExpanded]),
        expandSidenav = useCallback(() => setExpandedState(true), []),
        collapseSidenav = useCallback(() => {
            setExpandedState(false);
            setHoveredState(false);
        }, []),
        activeItemChangeHandler = useCallback(
            (key: string) => {
                !active && setActiveItem(key);
                onChange && onChange(key);
            },
            [active, onChange]
        );

    return (
        <SideNavContext.Provider value={{ isHovered, isExpanded, activeItem: active || activeItem, activeItemChangeHandler }}>
            <Styled.Aside ref={ref} position="left" id={id} isExpanded={isExpanded} isHovered={isHovered} hideShadow={hideShadow}>
                <Styled.Nav
                    isHovered={isHovered}
                    hideShadow={hideShadow}
                    isExpanded={isExpanded}
                    onMouseEnter={openSidenav}
                    onMouseLeave={closeSidenav}
                >
                    {children}
                    <ToggleSwitch id={`${id}-toggle`} isActive={isExpanded} onClick={isExpanded ? collapseSidenav : expandSidenav} />
                </Styled.Nav>
            </Styled.Aside>
        </SideNavContext.Provider>
    );
};

SideNav.List = NavList;
SideNav.Nav = NavItem;
SideNav.Group = NavGroup;
SideNav.Context = SideNavContext;
SideNav.displayName = 'SideNav';
SideNav.Style = Styled.Aside;
SideNav.defaultProps = {
    hideShadow: false
};
