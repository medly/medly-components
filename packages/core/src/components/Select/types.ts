import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { LabelPositions } from '../Label/types';

export interface SelectWrapperProps extends HTMLProps<HTMLDivElement>, WithThemeProp {
    labelPosition?: LabelPositions;
    fullWidth?: boolean;
    description?: string;
}

export interface Props extends HTMLProps<HTMLSelectElement>, WithThemeProp {
    labelPosition?: LabelPositions;
    fullWidth?: boolean;
    required?: boolean;
    label?: string;
    description?: string;
}
