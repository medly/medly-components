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
        };
        bgColor: {
            hovered: string;
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
        };
        bgColor: {
            hovered: string;
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
            active: string;
        };
        bgColor: {
            hovered: string;
            active: string;
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
