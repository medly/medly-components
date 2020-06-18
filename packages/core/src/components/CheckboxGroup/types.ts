import { CheckboxSizes, FontVariants, FontWeights } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'onChange'>, WithThemeProp {
    /** Array of selected values */
    values?: any[];
    /** This method will be called with checked values */
    onChange: (values: any[]) => void;
    /** Options */
    options: { value: any; label: string; disabled?: boolean; errorText?: string; helperText?: string; columns?: number }[];
    /** Label */
    label?: string;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Disable all the checkboxes */
    disabled?: boolean;
    /** Label Variant */
    labelVariant?: FontVariants;
    /** Label weight */
    labelWeight?: FontWeights;
    /** Label color */
    labelColor?: string;
    /** Name attribute of all the checkboxes */
    name?: string;
    /** Checkbox size */
    size?: CheckboxSizes;
    /** Show checkbox to select all options */
    showSelectAll?: boolean;
    /** Error Text */
    errorText?: string;
    /** Helper Message below checkboxGroup */
    helperText?: string;
    /** Display the options as vertical or horizontal */
    columns?: number;
    /** This will be handled internally */
    isIndented?: boolean;
    /** This will be handled internally */
    parentHasError?: boolean;
}
