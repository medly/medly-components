import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Option } from '../types';

export interface OptionsProps extends Omit<HTMLProps<HTMLUListElement>, 'size'> {
    id?: string;
    size?: 'S' | 'M';
    options: Option[];
    variant: 'outlined' | 'filled' | 'flat';
    isNested?: boolean;
    hasError?: boolean;
    maxWidth?: string;
    maxHeight?: string;
    onOptionClick: (option: Option | React.MouseEvent<HTMLLIElement>) => void;
}

export interface StyledOptionsProps extends WithThemeProp {
    size?: 'S' | 'M';
    isNested?: boolean;
    maxWidth?: string;
    maxHeight?: string;
    variant: 'outlined' | 'filled' | 'flat';
}
