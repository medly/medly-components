export interface FontSizeTheme {
    L1: string;
    L2: string;
    L3: string;
    L4: string;
    M1: string;
    M2: string;
    M3: string;
    S1: string;
}

export interface FontWeightTheme {
    Light: string;
    Normal: string;
    Strong: string;
}

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
