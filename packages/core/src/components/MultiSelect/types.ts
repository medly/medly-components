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
    /** Array of selected values */
    values?: any[];
    /** This method will be called with selected values */
    onChange: (values: any[]) => void;
    /** Options */
    options: Option[];
    /** Label */
    label?: string;
    /** Shows selected options as chip */
    showChips?: boolean;
    /** Shows checkboxes for all the options */
    showCheckbox?: boolean;
    /** Label Position */
    labelPosition?: LabelPositions;
    /** Min width */
    minWidth?: number;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Description of the Multiselect */
    description?: string;
    /** Description color */
    descriptionColor?: string;
}
