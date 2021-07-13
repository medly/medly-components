import { TextFieldTheme } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface TextFieldProps extends Omit<HTMLProps<HTMLInputElement>, 'prefix' | 'size' | 'height'>, WithThemeProp {
    /** Input Variants */
    variant?: 'outlined' | 'filled' | 'fusion';
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
    /** re-purpose into a content-card field */
    readOnly?: boolean;
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
    /** To use a text area, set multiline to true. When false, this component will be a text field */
    multiline?: boolean;
    /** Use minRows when multiline is true; minRows is the number of rows in text area */
    minRows?: number;
    /** Set to true to display the character count of the current input value */
    withCharacterCount?: boolean;
}

export interface StyledProps extends TextFieldProps, TextFieldTheme {
    isPrefixPresent: boolean;
    isSuffixPresent: boolean;
    isLabelPresent: boolean;
    multiline?: boolean;
    variant: 'filled' | 'outlined' | 'fusion';
    inputWidth: number;
}

export interface InnerWrapperProps extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'height'>, TextFieldTheme, WithThemeProp {
    variant?: 'outlined' | 'filled' | 'fusion';
    disabled?: boolean;
    readOnly?: boolean;
    size?: 'S' | 'M';
    isLabelPresent?: boolean;
    isErrorPresent?: boolean;
    multiline?: boolean;
    minRows?: number;
    isTextPresent?: boolean;
    isActive?: boolean;
}
