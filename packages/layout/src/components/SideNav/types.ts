import { Theme } from '@medly-components/theme';
import { WithStyle, WithThemeProp } from '@medly-components/utils';
import { FC } from 'react';
import { StyledComponent } from 'styled-components';
import { NavGroupProps } from './NavGroup/types';
import { NavItemProps } from './NavItem/types';
import { Context } from './SideNav.context';

export interface SideNavStyledProps extends WithThemeProp {
    isHovered?: boolean;
    isExpanded?: boolean;
    hideShadow?: boolean;
}

export interface SideNavProps {
    /** Id for the component */
    id?: string;
    /** Path of currently active link(only if you want to controlled the state) */
    active?: string;
    /** Default active path */
    defaultActive?: string;
    /** This func will be called on the item click */
    onChange?: (key: string) => void;
    /** Set it true to hide the shadow */
    hideShadow?: boolean;
    /** Set it true to open the sidenav on first render */
    defaultOpen?: boolean;
}

export interface SideNavStaticProps {
    /** This can be used to define Nav item */
    Nav: FC<NavItemProps> & WithStyle;
    /** This is a styled component which can be used to define List*/
    List: StyledComponent<'ul', Theme>;
    /** This can be used to group Nav item */
    Group: FC<NavGroupProps> & WithStyle;
    /** This can be used to get sidenav context */
    Context: React.Context<Context>;
}
