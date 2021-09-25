import { ButtonSizes, Theme } from '@medly-components/theme';
import { HTMLProps } from '@medly-components/utils';

export type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'size'> & { theme?: Theme } & {
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
    /** To be used to disable button */
    disabled?: boolean;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Set it true to show loading state */
    isLoading?: boolean;
};
