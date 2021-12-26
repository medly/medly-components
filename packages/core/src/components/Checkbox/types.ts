import { CheckboxSizes, FontVariants, FontWeights } from '@medly-components/theme';
import { HTMLProps, Omit } from '@medly-components/utils';
import { ChangeEvent } from 'react';
import { LabelPositions } from '../Label/types';

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type' | 'sizes'>;

export interface CheckboxProps extends InputProps {
    /** Checkbox label */
    label?: string;
    /** Checkbox size */
    size?: CheckboxSizes;
    /** Full width of the parent component */
    fullWidth?: boolean;
    /** Label position */
    labelPosition?: LabelPositions;
    /** Label variant */
    labelVariant?: FontVariants;
    /** Label weight */
    labelWeight?: FontWeights;
    /** Indeterminate state for checkbox */
    indeterminate?: boolean;
    /** Error Text */
    errorText?: string;
    /** Function will be called with the input value on blur, change and invalid event */
    validator?: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => string;
    /** This will be used internally by the Checkbox group */
    hasError?: boolean;
}
