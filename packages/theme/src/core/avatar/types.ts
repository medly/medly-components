import { FontSizeTheme } from '../font/types';

export type AvatarSizesType = 'S' | 'M' | 'L' | 'XL';

export interface AvatarTheme {
    S: {
        size: string;
        fontSize: keyof FontSizeTheme;
    };
    M: {
        size: string;
        fontSize: keyof FontSizeTheme;
    };
    L: {
        size: string;
        fontSize: keyof FontSizeTheme;
    };
    XL: {
        size: string;
        fontSize: keyof FontSizeTheme;
    };
    defaults: {
        size: AvatarSizesType;
        textColor: string;
        bgColor: string;
    };
}
