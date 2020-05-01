import { TextFieldTheme } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLInputElement>, 'prefix'>, WithThemeProp {
    /** Input Variants */
    variant?: 'outlined' | 'filled';
    /** Set it true if you are using built in form validation */
    withBuiltInValidation?: boolean;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Leading icon */
    prefix?: React.SFC<any>;
    /** Trailing icon */
    suffix?: React.SFC<any>;
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
    /** Min width */
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
