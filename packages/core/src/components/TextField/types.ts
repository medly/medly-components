import { TextFieldTheme } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLInputElement>, 'prefix' | 'size' | 'height'>, WithThemeProp {
    /** Input Variants */
    variant?: 'outlined' | 'filled' | 'rounded';
    /** Input Size */
    size?: 'S' | 'M';
    /** Function will called with the input value on blur and invalid event */
    validator?: (val: any, eventType?: string) => string;
    /** Mask format eg. DD / MM / YYYY */
    mask?: string;
    /** Set it true if you do not want to validate on blur event*/
    doNotValidateOnBlur?: boolean;
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
    /** Max width in px/rem/% (1rem = 10px)*/
    maxWidth?: string;
}

export interface StyledProps extends Props, TextFieldTheme {
    isPrefixPresent: boolean;
    isSuffixPresent: boolean;
    isLabelPresent: boolean;
    variant: 'filled' | 'outlined' | 'rounded';
}

export interface InnerWrapperProps extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'height'>, TextFieldTheme, WithThemeProp {
    variant?: 'outlined' | 'filled' | 'rounded';
    disabled?: boolean;
    size?: 'S' | 'M';
    isLabelPresent?: boolean;
    isErrorPresent?: boolean;
    inputContainsText?: boolean;
}
