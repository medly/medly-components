import { CheckboxSizes, FontVariants, FontWeights } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type'>;

export interface Props extends InputProps, WithThemeProp {
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
    /** Error state for checkbox */
    hasError?: boolean;
    /** Indeterminate state for checkbox */
    indeterminate?: boolean;
}
