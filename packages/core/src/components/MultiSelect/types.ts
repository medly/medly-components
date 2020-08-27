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

export interface MultiSelectProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'size'>, WithThemeProp {
    /** Array of selected values */
    values?: any[];
    /** This method will be called with selected values */
    onChange?: (values: any[]) => void;
    /** Options */
    options: Option[];
    /** Variants */
    variant?: 'outlined' | 'filled';
    /** Sizes */
    size?: 'S' | 'M';
    /** Label */
    label?: string;
    /** Set it it true to enable search functionality */
    isSearchable?: boolean;
    /** Set it true to disable the select action */
    disabled?: boolean;
    /** Set it true when it is required in any form */
    required?: boolean;
    /** Min width */
    minWidth?: number;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Helper Text */
    helperText?: string;
    /** Error Text */
    errorText?: string;
    /** Function will called with the input value on Blur event */
    validator?: (val: any[]) => string;
}

export interface SelectWrapperProps extends Omit<MultiSelectProps, 'ref' | 'options'> {
    isErrorPresent?: boolean;
    areOptionsVisible?: boolean;
}
