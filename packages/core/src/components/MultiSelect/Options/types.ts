import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Option } from '../types';

export interface OptionsProps extends HTMLProps<HTMLUListElement>, WithThemeProp {
    options: Option[];
    values: any[];
    onOptionClick: (options: any[]) => void;
}

export interface OptionStyledProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    isChild?: boolean;
    selected?: boolean;
    disabled?: boolean;
}
