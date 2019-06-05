export type FontSizes = 'L1' | 'L2' | 'L3' | 'L4' | 'M1' | 'M2' | 'M3' | 'S1';
export type FontSizeTheme = { [k in FontSizes]: string };

export type FontWeights = 'Light' | 'Normal' | 'Strong';
export type FontWeightTheme = { [k in FontWeights]: string };

export interface FontFaceTheme {
    fontFamily: string;
    fontFaces: FontFaceItem[];
}

export interface FontFaceItem {
    primarySrc: string;
    secondarySrc: string;
    fontWeight: number;
    fontStyle: string;
}

export interface FontTheme {
    defaultColor: string;
    defaultFontFamily: string;
    sizes: FontSizeTheme;
    weights: FontWeightTheme;
    faces: FontFaceTheme[];
}
