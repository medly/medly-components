import { TextFieldTheme } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import type { ChangeEvent, FC } from 'react';

export type TextFieldVariants = 'filled' | 'outlined' | 'fusion' | 'flat';

export interface TextFieldProps extends Omit<HTMLProps<HTMLInputElement>, 'prefix' | 'size' | 'height'> {
    /** Input variants */
    variant?: TextFieldVariants;
    /** Input size */
    size?: 'S' | 'M';
    /** Function will be called with the input value on blur and invalid event */
    validator?: (val: any, eventType: ChangeEvent<HTMLInputElement>) => string;
    /** Mask format eg. DD / MM / YYYY */
    mask?: string;
    /** Set it true if you do not want to validate on blur event*/
    doNotValidateOnBlur?: boolean;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Leading icon */
    prefix?: FC<any>;
    /** Trailing icon */
    suffix?: FC<any>;
    /** Disable input */
    disabled?: boolean;
    /** Show prefix, suffix, and character count elements. If set to false, only the input, label, and helper-text icon will be rendered. */
    showDecorators?: boolean;
    /** Set it true when it is required in any form */
    required?: boolean;
    /** Input label */
    label?: string;
    /** Helper text */
    helperText?: string;
    /** Error text */
    errorText?: string;
    /** Min width in px/rem/% (1rem = 10px)*/
    minWidth?: string;
    /** Max width in px/rem/% (1rem = 10px)*/
    maxWidth?: string;
    /** To use a text area, set multiline to true. When false, this component will be a text field. */
    multiline?: boolean;
    /** Use minRows when multiline is true; minRows is the number of rows in text area. */
    minRows?: number;
    /** Set it to true to display the character count of the current input value. This requires maxLength prop as well. */
    withCharacterCount?: boolean;
    /** Show Helper text and Error text in a tooltip (popover) */
    showTooltipForHelperAndErrorText?: boolean;
}

export interface StyledProps extends TextFieldProps {
    isPrefixPresent?: boolean;
    isSuffixPresent?: boolean;
    isLabelPresent?: boolean;
    inputSize: 'S' | 'M';
    variant: TextFieldVariants;
    inputWidth?: number;
}

export interface InnerWrapperProps extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'height'> {
    variant: TextFieldVariants;
    disabled?: boolean;
    showDecorators?: boolean;
    size: 'S' | 'M';
    isLabelPresent?: boolean;
    isErrorPresent?: boolean;
    multiline?: boolean;
    minRows?: number;
    isTextPresent?: boolean;
    isActive?: boolean;
}

export type InnerWrapperModifiedProps = InnerWrapperProps & WithThemeProp & Omit<TextFieldTheme, 'height'>;
