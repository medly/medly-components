import { Text } from '@medly-components/core';
import { SvgIconProps } from '@medly-components/icons';
import { HTMLProps, WithStyle, WithThemeProp } from '@medly-components/utils';
import { SFC } from 'react';
import { AnyStyledComponent } from 'styled-components';

export interface SideNavStyledProps extends WithThemeProp {
    open: boolean;
}
export interface NavListProps extends HTMLProps<HTMLUListElement>, WithThemeProp {
    /** This is passed automatically from parent */
    sidenavOpenHandler?: () => void;
}

export interface NavItemProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    /** To be used to render any component as Navitem */
    as?: any;
    /** To be used if rendering like Link */
    to?: string;
    /** To be used to open sidenav on click on it */
    openSideNavOnClick?: boolean;
    /** This is passed automatically from parent */
    sidenavOpenHandler?: () => void;
    /** Show active item */
    active?: boolean;
}

export interface NavItemStyledProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    as?: any;
    active?: string;
}

export interface SideNavProps {
    /** Logo to add */
    logo?: React.FunctionComponent<SvgIconProps> & WithStyle;
    /** To be used to close sidenav on click outside */
    closeOnOuterClick?: boolean;
}

export interface SideNavStaticProps {
    NavItem: SFC<NavItemProps> & WithStyle;
    NavIcon: AnyStyledComponent;
    NavList: SFC<NavListProps>;
    SubNavList: SFC<NavListProps>;
    BottomList: AnyStyledComponent;
    Logo: AnyStyledComponent;
    NavText: typeof Text;
}
