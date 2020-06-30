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
        };
        shadowColor: string;
    };
    header: {
        cell: {
            bgColor: {
                default: string;
                hovered: string;
                selected: string;
            };
        };
    };
}
