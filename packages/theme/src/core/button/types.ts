import { FontVariants } from '../font/types';

export type ButtonSizes = 'S' | 'M' | 'L';

type Colors = {
    default: string;
    hovered: string;
    pressed: string;
    disabled: string;
};

export interface ButtonTheme {
    /** Solid button colors */
    solid: {
        textColor: Colors;
        bgColor: Colors;
        hoverShadow: boolean;
    };
    /** Outlined button colors */
    outlined: {
        textColor: Colors;
        bgColor?: Colors;
        borderColor?: Colors;
        hoverShadow: boolean;
    };
    /** Flat button colors */
    flat: {
        textColor: Colors;
    };
    /** Border radius for different type of edges*/
    borderRadius: {
        square: string;
        rounded: string;
        circle: string;
    };
    /** Padding for different sizes */
    padding: {
        [k in ButtonSizes]: string;
    };
    /** Text variant for different sizes */
    textVariant: {
        [k in ButtonSizes]: FontVariants;
    };
}
