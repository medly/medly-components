import { FontWeights } from '../font/types';

export type AvatarSizes = 'S' | 'M' | 'L';

export interface AvatarTheme {
    /** Avatar sizes */
    sizes: {
        [k in AvatarSizes]: {
            avatarSize: string;
            fontSize: string;
        };
    };
    /** Avatar default properties */
    defaults: {
        size: AvatarSizes;
        textColor: string;
        bgColor: string;
        fontWeight: FontWeights;
        fontFamily: string;
        borderColor: string;
        borderRadius: string;
        hover: {
            bgColor: string;
            textColor: string;
            textShadowColor: string;
            imgShadowColor: string;
        };
        pressed: {
            bgColor: string;
            textColor: string;
        };
    };
}
