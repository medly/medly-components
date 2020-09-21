import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Option } from '../../types';

export interface OptionStyledProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    selected: boolean;
    variant: 'outlined' | 'filled' | 'flat';
    hasError?: boolean;
    hovered?: boolean;
    maxWidth?: string;
}

export interface OptionProps extends Option, Omit<HTMLProps<HTMLLIElement>, 'onClick' | 'value' | 'label' | 'size'>, WithThemeProp {
    size?: 'S' | 'M';
    variant: 'outlined' | 'filled' | 'flat';
    onClick: (op: Option) => void;
    hasError?: boolean;
    maxWidth?: string;
}
