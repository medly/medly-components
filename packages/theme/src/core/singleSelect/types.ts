import { FontVariants } from '../font/types';

export interface SingleSelectTheme {
    shadowColor: string;
    variant: {
        flat: {
            height: string;
            bgColor: {
                default: string;
                hovered: string;
                pressed: string;
                activated: string;
                disabled: string;
            };
            labelColor: {
                default: string;
                hovered: string;
                pressed: string;
                activated: string;
                disabled: string;
                error: string;
            };
            valueColor: {
                default: string;
                hovered: string;
                pressed: string;
                activated: string;
                disabled: string;
                error: string;
            };
        };
    };
    options: {
        borderRadius: {
            flat: string;
            filled: string;
            outlined: string;
            fusion: string;
        };
    };
    option: {
        textVariant: {
            S: FontVariants;
            M: FontVariants;
        };
        minHeight: {
            flat: string;
            filled: string;
            outlined: string;
            fusion: string;
        };
        bgColor: {
            default: string;
            hovered: string;
            pressed: string;
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
