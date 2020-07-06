export interface TableTheme {
    rowDisabledColor: string;
    rowBackgroundColor: string;
    headerColor: string;
    borderColor: string;
    scrollBarColor: string;
    shadowColor: string;
    row: {
        bgColor: {
            odd: string;
            even: string;
            disabled: string;
            selected: string;
        };
        selectedBorderColor: string;
    };
    header: {
        bgColor: string;
        cell: {
            bgColor: {
                default: string;
                hovered: string;
                selected: string;
                pressed: string;
            };
            textColor: {
                default: string;
                hovered: string;
                selected: string;
                pressed: string;
            };
        };
    };
}
