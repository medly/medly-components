export type AvatarSizes = 'S' | 'M' | 'L';

export interface AvatarTheme {
    sizes: {
        [k in AvatarSizes]: {
            avatarSize: string;
            fontSize: string;
            lineHeight: string;
        };
    };
    defaults: {
        size: AvatarSizes;
        textColor: string;
        fontWeight: string;
        bgColor: string;
        fontFamily: string;
        textHoverShadowColor: string;
        imgHoverShadowColor: string;
        hoverTextColor: string;
        hoverBgColor: string;
        borderColor: string;
    };
}
