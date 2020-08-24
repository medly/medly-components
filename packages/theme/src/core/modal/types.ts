export interface ModalTheme {
    overlayColor: string;
    shadowColor: string;
    headerColor: string;
    backgroundColor: string;
    scrollbarThumbColor: string;
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
