import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface StyledInputProps extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'value' | 'files'>, WithThemeProp {
    /** File List */
    files: FileList;
}

export interface StyledLabelProps extends HTMLProps<HTMLLabelElement>, WithThemeProp {
    /** Disable label */
    disabled?: boolean;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
}

export interface FileInputProps extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'value' | 'files' | 'onChange'> {
    /** File List */
    files: FileList;
    /** File List */
    onChange: (files: FileList) => void;
    /** Label Position */
    labelPosition?: LabelPositions;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Disable Input */
    disabled?: boolean;
    /** Use to make the input field mandatory while filing the form */
    required?: boolean;
    /** Input label */
    label?: string;
    /** Input description */
    description?: string;
    /** Description color */
    descriptionColor?: string;
    /** Placeholder */
    placeholder?: string;
}
