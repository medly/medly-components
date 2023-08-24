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

type OptionsChipStyle = {
    default: string;
    hovered: string;
    disabled: string;
};

export interface MultiSelectTheme {
    filled: MultiSelectVariant;
    fusion: MultiSelectVariant;
    outlined: MultiSelectVariant;
    flat: MultiSelectVariant;
    options: {
        textVariant: {
            S: FontVariants;
            M: FontVariants;
        };
        chip: {
            borderRadius: string;
            color: OptionsChipStyle;
            bgColor: OptionsChipStyle;
            borderColor: OptionsChipStyle;
            icon: {
                color: OptionsChipStyle;
                bgColor: OptionsChipStyle;
            };
        };
    };
}
