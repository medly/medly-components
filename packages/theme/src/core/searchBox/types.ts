import { FontVariants } from '../font/types';

export type Size = 'S' | 'M';

export type SearchBoxTheme = {
    height: {
        [k in Size]: string;
    };
    textColor: string;
    borderRadius: {
        [k in Size]: {
            default: string;
            active: string;
        };
    };
    textVariant: {
        [k in Size]: FontVariants;
    };
    padding: {
        [k in Size]: string;
    };
    bgColor: {
        default: string;
        hovered: string;
        active: string;
    };
    borderColor: {
        default: string;
        hovered: string;
        active: string;
    };
    placeholderTextColor: {
        default: string;
        active: string;
    };
    closeIcon: {
        padding: {
            [k in Size]: string;
        };
        borderRadius: string;
        color: {
            default: string;
            hovered: string;
            pressed: string;
        };
        bgColor: {
            hovered: string;
            pressed: string;
        };
    };
    searchIcon: {
        padding: {
            [k in Size]: string;
        };
        borderRadius: string;
        color: {
            active: string;
            default: string;
            hovered: string;
            pressed: string;
        };
        bgColor: {
            hovered: string;
            pressed: string;
        };
    };
    expandIcon: {
        padding: {
            [k in Size]: string;
        };
        borderRadius: string;
        color: {
            default: string;
            hovered: string;
            pressed: string;
            active: string;
        };
        bgColor: {
            hovered: string;
            active: string;
            pressed: string;
        };
    };
    boxShadow: {
        active: string;
        hovered: string;
    };
    options: {
        boxShadow: string;
    };
};
