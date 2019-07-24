import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLButtonElement>, WithThemeProp {
    as?: any;
    /** Use this if rendering it like Link */
    to?: string;
    type?: 'button' | 'reset' | 'submit';
    /** Button design */
    variant?: 'solid' | 'flat' | 'outlined';
    /** Button colors */
    color?: 'primary' | 'secondary';
}
