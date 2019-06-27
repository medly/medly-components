import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Option } from '../../types';

export interface OptionWithSelected extends Option {
    selected: boolean;
}

export interface OptionStyledProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    selected: boolean;
}

export interface OptionProps extends HTMLProps<HTMLLIElement> {
    option: OptionWithSelected;
}
