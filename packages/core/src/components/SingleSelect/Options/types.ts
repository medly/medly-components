import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Option } from '../types';

export interface OptionsProps extends HTMLProps<HTMLUListElement> {
    id: string;
    options: Option[];
    variant: 'outlined' | 'filled';
    onOptionClick: (option: Option) => void;
}

export interface StyledOptionsProps extends WithThemeProp {
    variant: 'outlined' | 'filled';
}
