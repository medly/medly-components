export interface TableTheme {
    rowDisabledColor: string;
    rowBackgroundColor: string;
    headerColor: string;
    borderColor: string;
    scrollBarColor: string;
    row: {
        bgColor: {
            odd: string;
            even: string;
            disabled: string;
            selected: string;
        };
        selectedBorderColor: string;
        shadowColor: string;
    };
    header: {
        bgColor: string;
        cell: {
            bgColor: {
                default: string;
                hovered: string;
                selected: string;
            };
        };
    };
}
