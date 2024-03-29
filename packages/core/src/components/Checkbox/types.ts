import { CheckboxSizes, FontVariants, FontWeights } from '@medly-components/theme';
import { HTMLProps, Omit } from '@medly-components/utils';
import { ChangeEvent } from 'react';
import { LabelPositions } from '../Label/types';

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'type' | 'sizes'>;

export interface CheckboxProps extends Omit<InputProps, 'label'> {
    /** Checkbox label */
    label?: string | React.ReactElement<any>;
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
    /** Function will be called with the input value on blur, change, and invalid event. */
    validator?: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => string;
    /** To use internally by the Checkbox group */
    hasError?: boolean;
    /** To use internally by the Checkbox group for keyboard navigation */
    isHovered?: boolean;
    /** To use internally by the Checkbox group for keyboard navigation */
    onSelectionFromKeyboard?: (isChecked: boolean) => void;
}
