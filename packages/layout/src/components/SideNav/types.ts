import { Text } from '@medly-components/core';
import { SvgIconProps } from '@medly-components/icons';
import { WithStyle, WithThemeProp } from '@medly-components/utils';
import { SFC } from 'react';
import { AnyStyledComponent } from 'styled-components';
import { NavItemProps } from './NavItem/types';
import { NavListProps } from './NavList/types';

export interface SideNavStyledProps extends WithThemeProp {
    open: boolean;
}

export interface SideNavProps {
    /** path of currently active link(only if you want to controlled the state) */
    active?: string;
    /** Logo to add */
    logo?: React.FunctionComponent<SvgIconProps> & WithStyle;
    /** To be used to close sidenav on click outside */
    closeOnOuterClick?: boolean;
    /** Default active path */
    defaultActive?: string;
    /** This func will be called on the item click */
    onChange?: (key: string) => void;
}

export interface SideNavStaticProps {
    NavItem: SFC<NavItemProps> & WithStyle;
    NavIcon: AnyStyledComponent;
    NavList: SFC<NavListProps>;
    SubNavList: SFC<NavListProps>;
    BottomList: SFC<NavListProps>;
    NavText: typeof Text;
}
