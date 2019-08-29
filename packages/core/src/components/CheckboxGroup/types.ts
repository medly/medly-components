import { CheckboxSizes, FontSizes, FontWeights } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Props extends WithThemeProp {
    label: string;
    value: any[];
    options: Array<{ value: any; label: string }>;
    onChange: (value: any[]) => void;

    disabled?: boolean;
    labelPosition?: LabelPositions;
    labelSize?: FontSizes;
    labelWeight?: FontWeights;
    labelColor?: string;
    name?: string;
    size?: CheckboxSizes;
    showSelectAll?: boolean;
}
