import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Dispatch, SetStateAction } from 'react';
import { Option } from '../types';

export interface OptionsProps extends Omit<HTMLProps<HTMLUListElement>, 'size'> {
    size: 'S' | 'M';
    options: Option[];
    values: any[];
    onOptionClick: (options: any[]) => void;
    isCreatable?: boolean;
    setValues?: Dispatch<SetStateAction<any[]>>;
    inputValue?: string;
    handleCreatableOptionClick?: (op: Option) => void;
}

export interface OptionStyledProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    isChild?: boolean;
    selected?: boolean;
    disabled?: boolean;
}
