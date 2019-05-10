import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Props as LabelProps } from '../Label/types';

export interface SelectWrapperProps extends HTMLProps<HTMLDivElement>, WithThemeProp {
    fullWidth?: boolean;
}

export interface Props extends HTMLProps<HTMLSelectElement>, WithThemeProp, LabelProps {
    fullWidth?: boolean;
    required?: boolean;
    label?: string;
    description?: string;
}
