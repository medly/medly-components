import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface BreadcrumbItemProps extends HTMLProps<HTMLLIElement>{
    /** To be used to disable Item  */
    disabled?: boolean;
}