import { State } from '../common/types';

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

interface MultiSelectVariant {
    icon: {
        [k in State]: IconTheme;
    };
    chip: {
        [k in State]: ChipTheme;
    };
}

export interface MultiSelectTheme {
    filled: MultiSelectVariant;
    outlined: MultiSelectVariant;
}
