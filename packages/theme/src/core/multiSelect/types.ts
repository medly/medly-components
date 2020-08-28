import { FontVariants } from '../font/types';

interface IconTheme {
    background: string;
    hoverBackground: string;
    color: string;
    hoverColor: string;
}

interface ChipTheme {
    background: string;
    color: string;
    border: string;
    hoverBorder: string;
}

export type State = 'default' | 'active' | 'error' | 'disabled';

interface MultiSelectComp {
    icon: {
        [k in State]: IconTheme;
    };
    chip: {
        [k in State]: ChipTheme;
    } & { borderRadius: string };
}

export interface MultiSelectTheme {
    filled: MultiSelectComp;
    outlined: MultiSelectComp;
    options: {
        textVariant: {
            S: FontVariants;
            M: FontVariants;
        };
    };
}
