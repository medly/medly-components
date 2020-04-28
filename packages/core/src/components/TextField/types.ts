import { TextFieldTheme } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLInputElement>, 'prefix'>, WithThemeProp {
    /** Input Variants */
    variant?: 'outlined' | 'filled';
    /** Set it true if you are using built in form validation */
    withBuiltInValidation?: boolean;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Prefix  */
    prefix?: React.SFC<any>;
    /** Suffix */
    suffix?: React.SFC<any>;
    /** Disable Input */
    disabled?: boolean;
    /** To be used when it is required in any form */
    required?: boolean;
    /** Input label */
    label: string;
    /** Helper Text */
    helperText?: string;
    /** Error Text */
    errorText?: string;
}

export interface StyledProps extends Props, TextFieldTheme {
    isPrefixPresent: boolean;
    isSuffixPresent: boolean;
}
