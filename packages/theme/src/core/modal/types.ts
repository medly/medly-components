export interface ModalTheme {
    overlayColor: string;
    shadowColor: string;
    headerColor: string;
    backgroundColor: string;
    borderRadius: string;
    scrollbarThumbColor: string;
    closeIcon: {
        borderRadius: string;
        border: string;
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
    padding: {
        header: {
            desktop: string;
            mobile: string;
        };
        content: {
            desktop: string;
            mobile: string;
        };
        actions: {
            desktop: string;
            mobile: string;
        };
    };
}
