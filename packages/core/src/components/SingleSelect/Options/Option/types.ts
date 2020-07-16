import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Option } from '../../types';

export interface OptionStyledProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    selected: boolean;
    hasError?: boolean;
    hovered?: boolean;
}

export interface OptionProps extends Option, Omit<HTMLProps<HTMLLIElement>, 'onClick' | 'value' | 'label'> {
    onClick: (op: Option) => void;
    hasError?: boolean;
}
