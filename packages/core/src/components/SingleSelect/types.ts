import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Option {
    value: any;
    label: string;
    selected?: boolean;
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

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange'>;

export interface SelectProps extends InputProps, WithThemeProp {
    /** Options */
    options: Option[];
    /** Default selected options */
    defaultValue?: any;
    /** Min width */
    minWidth?: number;
    /** Label Position */
    labelPosition?: LabelPositions;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Label */
    label?: string;
    /** Description of the Select */
    description?: string;
    /** Placeholder for the input */
    placeholder?: string;
    /** Function to be called on selecting any option */
    onChange?: (value: any) => void;
}
