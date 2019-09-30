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
    options: Option[];
    onChange: (value: any[]) => void;

    showChips?: boolean;
    showCheckbox?: boolean;
    defaultValues?: any[];

    labelPosition?: LabelPositions;
    minWidth?: number;
    fullWidth?: boolean;
    label?: string;
    description?: string;
}
