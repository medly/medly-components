import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface FlatVariantProps extends Omit<HTMLProps<HTMLButtonElement>, 'size'>, WithThemeProp {
    /** Selected Value */
    value: string;
    /** Label */
    label?: string;
    /** Error Text */
    errorText?: string;
    /** Helper Text */
    helperText?: string;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Set it true to disable the select action */
    disabled?: boolean;
    /** Set it true to when options are visible */
    areOptionsVisible?: boolean;
}
