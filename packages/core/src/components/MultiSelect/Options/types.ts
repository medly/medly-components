import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { Dispatch, SetStateAction } from 'react';
import { KeyBindings, Option } from '../types';

export interface OptionsProps extends Omit<HTMLProps<HTMLUListElement>, 'size'> {
    size: 'S' | 'M';
    options: Option[];
    values: any[];
    cursor?: number;
    setIsParentCursorEnabled?: Dispatch<SetStateAction<boolean>>;
    onOptionClick: (options: any[]) => void;
    setValues?: Dispatch<SetStateAction<any[]>>;
    inputValue?: string;
    showCreatableOption?: boolean;
    handleCreatableOptionClick?: (op: Option) => void;
    keybindings?: KeyBindings;
}

export interface OptionStyledProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    isChild?: boolean;
    selected?: boolean;
    disabled?: boolean;
}
