import { CheckboxSizes } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Props extends WithThemeProp {
    label: string;
    value: any[];
    options: Array<{ value: any; label: string }>;
    onChange: (value: any[]) => void;

    disabled?: boolean;
    labelPosition?: LabelPositions;
    name?: string;
    size?: CheckboxSizes;
    showSelectAll?: boolean;
}
