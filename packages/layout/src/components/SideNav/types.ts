import { Theme } from '@medly-components/theme/src';
import { WithStyle, WithThemeProp } from '@medly-components/utils';
import { SFC } from 'react';
import { StyledComponent } from 'styled-components';
import { NavItemProps } from './NavItem/types';

export interface SideNavStyledProps extends WithThemeProp {
    isHovered?: boolean;
    isExpanded?: boolean;
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
}

export interface SideNavStaticProps {
    /** This can be used to define Nav item */
    Nav: SFC<NavItemProps> & WithStyle;
    /** This is a styled component which can be used to define List*/
    List: StyledComponent<'ul', Theme>;
}
