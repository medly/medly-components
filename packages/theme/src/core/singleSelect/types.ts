export interface SingleSelectTheme {
    bgColor: string;
    disabledBgColor: string;
    outlineColor: string;
    borderColor: string;
    descriptionColor: string;
    placeHolderColor: string;
    selectedBgColor: string;
    selectedTextColor: string;
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
