import { CheckboxSizes, FontSizes, FontWeights } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Props extends WithThemeProp {
    /** Options */
    options: Array<{ value: any; label: string }>;
    /** This method will be called with checked options */
    onChange: (value: any[]) => void;
    /** Label */
    label?: string;
    /** Default values to be selected */
    defaultValues?: any[];
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
