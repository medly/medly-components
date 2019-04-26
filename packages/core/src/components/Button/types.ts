import { HTMLProps, WithThemeProp } from '@core-utils/types';

export interface Props extends HTMLProps<HTMLButtonElement>, WithThemeProp {
    type?: 'button' | 'reset' | 'submit';
    /** Button design */
    variant?: 'solid' | 'flat' | 'outlined';
    /** Button colors */
    color?: 'primary' | 'secondary';
}
