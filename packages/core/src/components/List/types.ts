import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLUListElement>, WithThemeProp {
    variant?: 'horizontal' | 'vertical';
}
