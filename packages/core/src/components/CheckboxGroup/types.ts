import { CheckboxSizes, FontSizes, FontWeights } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'onChange'>, WithThemeProp {
    /** Array of selected values */
    values?: any[];
    /** This method will be called with checked values */
    onChange: (values: any[]) => void;
    /** Options */
    options: Array<{ value: any; label: string; disabled?: boolean }>;
    /** Label */
    label?: string;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Disable all the checkboxes */
    disabled?: boolean;
    /** Label position */
    labelPosition?: LabelPositions;
    /** Label size */
    labelSize?: FontSizes;
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
}
