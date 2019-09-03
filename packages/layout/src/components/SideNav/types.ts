import { Text } from '@medly-components/core';
import { SvgIconProps } from '@medly-components/icons';
import { HTMLProps, WithStyle, WithThemeProp } from '@medly-components/utils';
import { AnyStyledComponent } from 'styled-components';

export interface SideNavStyledProps extends WithThemeProp {
    open: boolean;
}
export interface NavListProps extends HTMLProps<HTMLUListElement>, WithThemeProp {
    sidenavOpenHandler?: () => void;
}

export interface NavItemProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    as?: any;
    to?: string;
    openSideNavOnClick?: boolean;
    sidenavOpenHandler?: () => void;
    active?: boolean;
}

export interface NavItemStyledProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    as?: any;
    active?: string;
}

export interface SideNavProps {
    logo?: React.FunctionComponent<SvgIconProps> & WithStyle;
    closeOnOuterClick?: boolean;
}

export interface SideNavStaticProps {
    NavItem: React.SFC<NavItemProps> & WithStyle;
    NavIcon: AnyStyledComponent;
    NavList: React.SFC<NavListProps>;
    SubNavList: React.SFC<NavListProps>;
    BottomList: AnyStyledComponent;
    Logo: AnyStyledComponent;
    NavText: typeof Text;
}
