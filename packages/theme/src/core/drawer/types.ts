export interface DrawerTheme {
    overlayColor: string;
    closeIcon: {
        borderRadius: string;
        color: {
            default: string;
            hovered: string;
            pressed: string;
        };
        bgColor: {
            default: string;
            hovered: string;
            pressed: string;
        };
    };
}
