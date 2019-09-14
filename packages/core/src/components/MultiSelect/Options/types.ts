import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Option } from '../types';

export interface OptionsProps extends WithThemeProp {
    options: Option[];
    defaultValues: any[];
    onOptionClick: (options: any[]) => void;

    showCheckbox?: boolean;
}

export interface OptionsStyledProps extends WithThemeProp {
    showCheckbox?: boolean;
}

export interface OptionStyledProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    isChild?: boolean;
    selected?: boolean;
    disabled?: boolean;
}
