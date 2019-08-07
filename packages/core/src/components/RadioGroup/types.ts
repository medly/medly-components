import { RadioSizes } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Props extends WithThemeProp {
    onChange?: (value: string) => void;
    disabled?: boolean;
    defaultChecked?: string;
    labelPosition?: LabelPositions;
    required?: boolean;
    label?: string;
    name?: string;
    size?: RadioSizes;
}
