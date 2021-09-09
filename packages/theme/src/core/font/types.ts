export type FontVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body1' | 'body2' | 'body3' | 'button1' | 'button2';
export type FontVariantTheme = {
    [k in FontVariants]: {
        fontSize: string;
        fontWeight: FontWeights;
        lineHeight: string;
        letterSpacing: string;
    };
};

export type FontWeights = 'Light' | 'Regular' | 'Medium' | 'Strong' | 'ExtraStrong';
export type FontWeightTheme = {
    [k in FontWeights]: string;
};

export interface FontFaceTheme {
    /** Font family name */
    fontFamily: string;
    /** Font faces */
    fontFaces: FontFaceItem[];
}

export interface FontFaceItem {
    primarySrc: string;
    secondarySrc: string;
    fontWeight: number;
    fontStyle: string;
    fontDisplay?: string;
}

export interface FontTheme {
    /** Font variants */
    variants: FontVariantTheme;
    /** Font weights */
    weights: FontWeightTheme;
    /** Font faces */
    faces: FontFaceTheme[];
    /** Default font style */
    defaults: {
        color: string;
        variant: FontVariants;
        fontFamily: string;
    };
}
