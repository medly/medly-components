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
    titleRow: {
        bgColor: {
            default: string;
            selected: string;
        };
        countChip: {
            textColor: string;
            bgColor: {
                default: string;
                selected: string;
            };
        };
        secondaryContent: {
            textColor: string;
        };
    };
    accordionIcon: {
        color: string;
        bgColor: {
            hover: string;
            pressed: string;
            selected: {
                hover: string;
                pressed: string;
            };
        };
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
