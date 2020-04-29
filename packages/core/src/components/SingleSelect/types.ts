import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Option {
    /** Option value */
    value: any;
    /** Option label */
    label: string;
    /** This will be handled by component itself */
    selected?: boolean;
    /** Set it true if this option is disabled */
    disabled?: boolean;
}

export interface DefaultSelected {
    value: string;
    label: string;
}

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'prefix'>;

export interface SelectProps extends InputProps, WithThemeProp {
    /** Selected Value */
    value?: any;
    /** Function to be called on selecting any option */
    onChange?: (value: any) => void;
    /** Options */
    options: Option[];
    /** Variants */
    variant?: 'outlined' | 'filled';
    /** Set it it true to enable search functionality */
    isSearchable?: boolean;
    /** Min width */
    minWidth?: string;
    /** Set it true if you are using built in form validation */
    withBuiltInValidation?: boolean;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Set it true to disable the select action */
    disabled?: boolean;
    /** Set it true when it is required in any form */
    required?: boolean;
    /** Label */
    label?: string;
    /** Leading icon */
    prefix?: React.SFC<any>;
    /** Helper Text */
    helperText?: string;
    /** Error Text */
    errorText?: string;
}

export interface SelectWrapperProps extends Omit<SelectProps, 'ref' | 'options'> {
    isErrorPresent?: boolean;
    areOptionsVisible?: boolean;
}
