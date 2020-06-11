export type ButtonSizes = 'S' | 'M';

type Colors = {
    bgColor: string;
    hoverBgColor: string;
    shadowColor: string;
};

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
        default: Colors;
        gradient: Colors;
        confirmation: Colors;
        error: Colors;
    };
    /** Border radius for  different type of edges*/
    borderRadius: {
        square: string;
        rounded: string;
        circle: string;
    };
}
