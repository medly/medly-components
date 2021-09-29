import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Option } from '../types';

export interface OptionsProps extends Omit<HTMLProps<HTMLUListElement>, 'size'> {
    id?: string;
    size: 'S' | 'M';
    options: Option[];
    variant: 'outlined' | 'filled' | 'flat' | 'fusion';
    isNested?: boolean;
    hasError?: boolean;
    maxWidth?: string;
    includesNestedOptions?: boolean;
    onOptionClick: (option: Option) => void;
}

export interface StyledOptionsProps extends WithThemeProp {
    size: 'S' | 'M';
    isNested?: boolean;
    maxWidth?: string;
    includesNestedOptions?: boolean;
    variant: 'outlined' | 'filled' | 'flat' | 'fusion';
}
