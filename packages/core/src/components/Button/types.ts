import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLButtonElement>, WithThemeProp {
    /** To be used to render any component as Button */
    as?: any;
    /** To be used if rendering like Link */
    to?: string;
    /** Button type */
    type?: 'button' | 'reset' | 'submit';
    /** Button design */
    variant?: 'solid' | 'flat' | 'outlined';
    /** Button colors */
    color?: 'primary' | 'secondary';
    /** To be used to disable button */
    disabled?: boolean;
}
