import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Props as LabelProps } from '../Label/types';

export interface Props extends HTMLProps<HTMLInputElement>, WithThemeProp, LabelProps {
    fullWidth?: boolean;
    required?: boolean;
    label?: string;
    description?: string;
}
