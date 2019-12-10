import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface NavListProps extends HTMLProps<HTMLUListElement>, WithThemeProp {
    /** This is passed automatically from parent */
    sidenavOpenHandler?: () => void;
    /** This is passed automatically from parent */
    leftPadding?: number;
}
