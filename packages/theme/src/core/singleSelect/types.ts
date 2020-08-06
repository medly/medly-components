export interface SingleSelectTheme {
    shadowColor: string;
    option: {
        bgColor: {
            default: string;
            hovered: string;
            selected: string;
            error: string;
        };
        textColor: {
            default: string;
            selected: string;
            error: string;
            disabled: string;
        };
    };
}
