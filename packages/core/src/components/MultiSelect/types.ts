import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

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

export interface SelectWrapperProps extends HTMLProps<HTMLDivElement>, WithThemeProp {
    labelPosition?: LabelPositions;
    fullWidth?: boolean;
    description?: string;
}

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'defaultValue'>;

export interface SelectProps extends InputProps, WithThemeProp {
    /** Options */
    options: Option[];
    /** Function to be called on selecting any option */
    onChange: (value: any[]) => void;

    /** Shows selected options as chip */
    showChips?: boolean;
    /** Shows checkboxes for all the options */
    showCheckbox?: boolean;
    /** Default selected options */
    defaultValues?: any[];
    /** Label Position */
    labelPosition?: LabelPositions;
    /** Min width */
    minWidth?: number;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Label */
    label?: string;
    /** Description of the Multiselect */
    description?: string;
}
