export type ButtonSizes = 'S' | 'M';

export interface ButtonTheme {
    /** Multiple color combinations */
    colors: {
        solid: {
            textColor: string;
            disabledBgColor: string;
            disabledTextColor: string;
        };
        outlined: {
            disabledBgColor: string;
            disabledTextColor: string;
        };
        flat: {
            disabledTextColor: string;
        };
        default: {
            bgColor: string;
            hoverBgColor: string;
            shadowColor: string;
        };
        confirmation: {
            bgColor: string;
            hoverBgColor: string;
            shadowColor: string;
        };
        error: {
            bgColor: string;
            hoverBgColor: string;
            shadowColor: string;
        };
    };
    /** Border radius for  different type of edges*/
    borderRadius: {
        square: string;
        rounded: string;
    };
}
