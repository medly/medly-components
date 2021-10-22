import { CheckboxSizes, FontVariants, FontWeights } from '@medly-components/theme';
import { HTMLProps, Omit } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type' | 'sizes'>;

export interface CheckboxProps extends InputProps {
    /** Checkbox label */
    label?: string;
    /** Checkbox size */
    size?: CheckboxSizes;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Label position */
    labelPosition?: LabelPositions;
    /** Label Variant */
    labelVariant?: FontVariants;
    /** Label Weight */
    labelWeight?: FontWeights;
    /** Indeterminate state for checkbox */
    indeterminate?: boolean;
    /** Error Text */
    errorText?: string;
    /** Function will called with the input value on blur, change and invalid event */
    validator?: (checked: boolean) => string;
    /** This will be used internally by Checkbox group */
    hasError?: boolean;
}
