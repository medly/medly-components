import { FontSizeTheme } from '../font/types';

export interface AvatarSizes {
    S: {
        avatarSize: string;
        fontSize: keyof FontSizeTheme;
    };
    M: {
        avatarSize: string;
        fontSize: keyof FontSizeTheme;
    };
    L: {
        avatarSize: string;
        fontSize: keyof FontSizeTheme;
    };
    XL: {
        avatarSize: string;
        fontSize: keyof FontSizeTheme;
    };
}

export interface AvatarTheme {
    sizes: AvatarSizes;
    defaults: {
        size: keyof AvatarSizes;
        textColor: string;
        bgColor: string;
    };
}
