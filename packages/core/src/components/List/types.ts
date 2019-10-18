import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLUListElement>, WithThemeProp {
    /** List items direction */
    variant?: 'horizontal' | 'vertical';
}
