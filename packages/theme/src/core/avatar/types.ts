import { FontVariants } from '../font/types';

export type AvatarSizes = 'S' | 'M' | 'L';

export interface AvatarTheme {
    sizes: {
        [k in AvatarSizes]: {
            avatarSize: string;
            fontSize: string;
        };
    };
    defaults: {
        size: AvatarSizes;
        textColor: string;
        bgColor: string;
        lineHeight: string;
        fontWeight: string;
        fontFamily: string;
        hoverBoxShadowColor: string;
        imgHoverShadowColor: string;
        hoverTextColor: string;
        hoverBgColor: string;
        borderColor: string;
    };
}
