import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Option } from '../types';

export interface OptionsProps extends HTMLProps<HTMLUListElement> {
    id?: string;
    options: Option[];
    variant: 'outlined' | 'filled';
    isNested?: boolean;
    highlightSelected?: boolean;
    onOptionClick: (option: Option | React.MouseEvent<HTMLLIElement>) => void;
}

export interface StyledOptionsProps extends WithThemeProp {
    isNested?: boolean;
    variant: 'outlined' | 'filled';
}
