import { FontSizeTheme } from '../font/types';

export interface StepperSizes {
    S: {
        counterSize: string;
        fontSize: keyof FontSizeTheme;
    };
    M: {
        counterSize: string;
        fontSize: keyof FontSizeTheme;
    };
    L: {
        counterSize: string;
        fontSize: keyof FontSizeTheme;
    };
    XL: {
        counterSize: string;
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
