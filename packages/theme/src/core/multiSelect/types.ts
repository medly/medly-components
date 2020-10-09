import { State } from '../common/types';
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

interface MultiSelectVariant {
    icon: {
        [k in State]: IconTheme;
    };
    chip: {
        [k in State]: ChipTheme;
    } & { borderRadius: string };
}

export interface MultiSelectTheme {
    filled: MultiSelectVariant;
    outlinedRounded: MultiSelectVariant;
    outlined: MultiSelectVariant;
    options: {
        textVariant: {
            S: FontVariants;
            M: FontVariants;
        };
    };
}
