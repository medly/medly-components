export interface TableTheme {
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
                pressed: string;
                selected: {
                    default: string;
                    hovered: string;
                    pressed: string;
                };
            };
            textColor: {
                default: string;
                hovered: string;
                pressed: string;
                selected: {
                    default: string;
                    hovered: string;
                    pressed: string;
                };
            };
        };
    };
}
