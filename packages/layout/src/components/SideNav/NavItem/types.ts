import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface NavItemProps extends HTMLProps<HTMLLIElement> {
    /** Path of the navitem */
    path: string;
    /** To be used to open sidenav on click on it */
    openSideNavOnClick?: boolean;
    /** To be used to render any component as Navitem */
    as?: any;
    /** To be used if rendering like Link */
    to?: string;
    /** This is passed automatically from parent */
    sidenavOpenHandler?: () => void;
    /** This is passed automatically from parent */
    openItem?: string;
    /** This is passed automatically from parent */
    setOpenItem?: (key: string) => void;
    /** This is passed automatically from parent */
    leftPadding?: number;
}

export interface NavItemStyledProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    as?: any;
    open?: boolean;
    active?: boolean;
    containsSubList?: boolean;
}
