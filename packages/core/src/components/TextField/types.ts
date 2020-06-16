import { TextFieldTheme } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLInputElement>, 'prefix'>, WithThemeProp {
    /** Input Variants */
    variant?: 'outlined' | 'filled';
    /** Function will called with the input value on Blur event */
    validator?: (val: any) => string;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Leading icon */
    prefix?: React.FC<any>;
    /** Trailing icon */
    suffix?: React.FC<any>;
    /** Disable Input */
    disabled?: boolean;
    /** Set it true when it is required in any form */
    required?: boolean;
    /** Input label */
    label?: string;
    /** Helper Text */
    helperText?: string;
    /** Error Text */
    errorText?: string;
    /** Min width in px/rem/% (1rem = 10px)*/
    minWidth?: string;
}

export interface StyledProps extends Props, TextFieldTheme {
    isPrefixPresent: boolean;
    isSuffixPresent: boolean;
    isLabelPresent: boolean;
}

export interface InnerWrapperProps extends HTMLProps<HTMLDivElement>, TextFieldTheme, WithThemeProp {
    variant?: 'outlined' | 'filled';
    disabled?: boolean;
    isLabelPresent?: boolean;
    isErrorPresent?: boolean;
}
