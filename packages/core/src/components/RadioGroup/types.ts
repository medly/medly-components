import { FontSizes, FontWeights, RadioSizes } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Props extends WithThemeProp {
    onChange?: (value: string) => void;
    disabled?: boolean;
    defaultChecked?: string;
    labelPosition?: LabelPositions;
    labelSize?: FontSizes;
    labelWeight?: FontWeights;
    labelColor?: string;
    required?: boolean;
    label?: string;
    name?: string;
    size?: RadioSizes;
}
