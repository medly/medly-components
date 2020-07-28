import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Option {
    value: any;
    label: string;
    selected?: boolean;
    disabled?: boolean;
}

export interface DefaultSelected {
    value: string;
    label: string;
}

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'defaultValue' | 'prefix'>;

export interface SelectProps extends InputProps, WithThemeProp {
    /** Array of selected values */
    values?: any[];
    /** This method will be called with selected values */
    onChange?: (values: any[]) => void;
    /** Options */
    options: Option[];
    /** Variants */
    variant?: 'outlined' | 'filled';
    /** Label */
    label?: string;
    /** Set it it true to enable search functionality */
    isSearchable?: boolean;
    /** Set it true to disable the select action */
    disabled?: boolean;
    /** Set it true when it is required in any form */
    required?: boolean;
    /** Shows checkboxes for all the options */
    showCheckbox?: boolean;
    /** Min width */
    minWidth?: number;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Helper Text */
    helperText?: string;
    /** Error Text */
    errorText?: string;
}

export interface SelectWrapperProps extends Omit<SelectProps, 'ref' | 'options'> {
    isErrorPresent?: boolean;
    areOptionsVisible?: boolean;
}
