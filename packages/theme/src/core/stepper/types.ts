import { FontSizeTheme } from '../font/types';

export interface StepperSizes {
    S: {
        size: string;
        fontSize: keyof FontSizeTheme;
    };
    M: {
        size: string;
        fontSize: keyof FontSizeTheme;
    };
    L: {
        size: string;
        fontSize: keyof FontSizeTheme;
    };
    XL: {
        size: string;
        fontSize: keyof FontSizeTheme;
    };
}

export interface StepperTheme {
    sizes: StepperSizes;
    defaultSize: keyof StepperSizes;
    counterColor: string;
    activeColor: string;
    inactiveColor: string;
}
