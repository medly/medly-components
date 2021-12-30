export interface Color {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
}

export interface GreyScale {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}

export interface ColorPallet {
    black: string;
    blue: Color;
    blush: Color;
    classyGreen: string;
    everGreen: Color;
    green: Color;
    grey: GreyScale;
    heartbeat: Color;
    medlyGreen: Color;
    periwinkle: Color;
    professionalNavy: string;
    red: Color;
    white: string;
    yellow: Color;
    [k: string]: string | Color;
}
