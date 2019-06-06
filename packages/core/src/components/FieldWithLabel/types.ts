import { WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Props extends WithThemeProp {
    labelPosition?: LabelPositions;
    fullWidth?: boolean;
}
