import { SideNavTheme } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface NavItemProps extends HTMLProps<HTMLLIElement> {
    /** To be used if rendering like react-router Link */
    to?: string;
    /** Path of the navitem */
    path?: string;
    /** To be used to render Navitem as any component*/
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

export interface NavItemStyledProps extends HTMLProps<HTMLLIElement>, WithThemeProp, SideNavTheme {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    isHovered?: boolean;
    isExpanded?: boolean;
    isActive?: boolean;
}
