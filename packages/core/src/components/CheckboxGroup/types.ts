import { CheckboxSizes } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Props extends WithThemeProp {
    required?: boolean;
    labelPosition?: LabelPositions;
    label?: string;
    name?: string;
    size?: CheckboxSizes;
}
