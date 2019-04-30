import { HTMLProps, WithThemeProp } from '../../utils/types';

export interface Props extends HTMLProps<HTMLUListElement>, WithThemeProp {
    variant?: 'horizontal' | 'vertical';
}
