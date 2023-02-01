import { ButtonSizes, Theme } from '@medly-components/theme';
import { HTMLProps } from '@medly-components/utils';

export type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'size'> & { theme?: Theme } & {
    /** Use to render any component as Button */
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    /** Use for rendering like Link */
    to?: string | number;
    /** Button sizes */
    size?: ButtonSizes;
    /** Button type */
    type?: 'button' | 'reset' | 'submit';
    /** Button design */
    variant?: 'solid' | 'flat' | 'outlined';
    /** Button edges */
    edges?: 'square' | 'rounded' | 'circle';
    /** Use to disable button */
    disabled?: boolean;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Set it true to show loading state */
    isLoading?: boolean;
    /** Toggle flat button underline: this property will work only on flat variant  */
    hideUnderline?: boolean;
};
