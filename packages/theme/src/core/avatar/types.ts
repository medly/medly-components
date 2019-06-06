import { FontSizes } from '../font/types';

export type AvatarSizes = 'S' | 'M' | 'L' | 'XL';

export interface AvatarTheme {
    sizes: {
        [k in AvatarSizes]: {
            avatarSize: string;
            fontSize: FontSizes;
        }
    };
    defaults: {
        size: AvatarSizes;
        textColor: string;
        bgColor: string;
    };
}
