import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface Props extends HTMLProps<HTMLInputElement>, WithThemeProp {
    labelPosition?: LabelPositions;
    fullWidth?: boolean;
    required?: boolean;
    label?: string;
    description?: string;
}
