import { FontSizes } from '../font/types';

export type StepperSizes = 'S' | 'M' | 'L' | 'XL';

export interface StepperTheme {
    sizes: {
        [k in StepperSizes]: {
            counterSize: string;
            fontSize: FontSizes;
        };
    };
    defaultSize: StepperSizes;
    counterColor: string;
    activeColor: string;
    inactiveColor: string;
}
