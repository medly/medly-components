import { FontSizes } from '../font/types';

export interface AvatarSizes {
    S: {
        avatarSize: string;
        fontSize: FontSizes;
    };
    M: {
        avatarSize: string;
        fontSize: FontSizes;
    };
    L: {
        avatarSize: string;
        fontSize: FontSizes;
    };
    XL: {
        avatarSize: string;
        fontSize: FontSizes;
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
