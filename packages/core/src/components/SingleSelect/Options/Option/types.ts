import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Option } from '../../types';

export interface OptionStyledProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    selected: boolean;
    highlightSelected?: boolean;
}

export interface OptionProps extends Option, Omit<HTMLProps<HTMLLIElement>, 'onClick' | 'value' | 'label'> {
    onClick: (op: Option) => void;
    highlightSelected?: boolean;
}
