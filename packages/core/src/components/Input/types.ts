import { HTMLProps } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface InputProps extends HTMLProps<HTMLInputElement> {
    /** Label position */
    labelPosition?: LabelPositions;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Prefix  */
    prefix?: string;
    /** Suffix */
    suffix?: string;
    /** Disable input */
    disabled?: boolean;
    /** Use to make the input field mandatory while filling the form */
    required?: boolean;
    /** Input label */
    label?: string;
    /** Input description */
    description?: string;
    /** Description color */
    descriptionColor?: string;
}
