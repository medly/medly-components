import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Option {
    value: string;
    label: string;
    selected: boolean;
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
    options: Array<{ value: any; label: string }>;
    defaultValue?: any;
    minWidth?: number;
    disabled?: boolean;
    labelPosition?: LabelPositions;
    fullWidth?: boolean;
    required?: boolean;
    label?: string;
    description?: string;
    placeholder?: string;
    onChange?: (value: any) => void;
}
