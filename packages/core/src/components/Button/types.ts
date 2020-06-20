import { ButtonSizes } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLButtonElement>, 'size'>, WithThemeProp {
    /** To be used to render any component as Button */
    as?: any;
    /** To be used if rendering like Link */
    to?: string;
    /** Button sizes */
    size?: ButtonSizes;
    /** Button type */
    type?: 'button' | 'reset' | 'submit';
    /** Button design */
    variant?: 'solid' | 'flat' | 'outlined';
    /** Button edges */
    edges?: 'square' | 'rounded' | 'circle';
    /** Button colors */
    color?: 'default' | 'confirmation' | 'error';
    /** To be used to disable button */
    disabled?: boolean;
    /** Set it true to show gradient in the solid button */
    withGradient?: boolean;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
}
