import { RadioSizes } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Props extends WithThemeProp {
    labelPosition?: LabelPositions;
    required?: boolean;
    label?: string;
    name?: string;
    size?: RadioSizes;
}
