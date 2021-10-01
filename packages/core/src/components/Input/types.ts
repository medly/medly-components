import { HTMLProps } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface InputProps extends HTMLProps<HTMLInputElement> {
    /** Label Position */
    labelPosition?: LabelPositions;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Prefix  */
    prefix?: string;
    /** Suffix */
    suffix?: string;
    /** Disable Input */
    disabled?: boolean;
    /** To be used when it is required in any form */
    required?: boolean;
    /** Input label */
    label?: string;
    /** Input description */
    description?: string;
    /** Description color */
    descriptionColor?: string;
}
