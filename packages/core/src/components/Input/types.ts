import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Props extends HTMLProps<HTMLInputElement>, WithThemeProp {
    /** Label Position */
    labelPosition?: LabelPositions;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Disable Input */
    disabled?: boolean;
    /** To be used when it is required in any form */
    required?: boolean;
    /** Input label */
    label?: string;
    /** Input description */
    description?: string;
}
