import { FontVariants } from '../font/types';

export interface SingleSelectTheme {
    shadowColor: string;
    option: {
        textVariant: {
            S: FontVariants;
            M: FontVariants;
        };
        bgColor: {
            default: string;
            hovered: string;
            selected: string;
            error: string;
        };
        textColor: {
            default: string;
            selected: string;
            error: string;
            disabled: string;
        };
    };
}
