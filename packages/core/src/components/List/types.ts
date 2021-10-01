import { HTMLProps } from '@medly-components/utils';

export interface ListProps extends HTMLProps<HTMLUListElement> {
    /** List items direction */
    variant?: 'horizontal' | 'vertical';
}
