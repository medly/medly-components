import { FontVariants } from '../font/types';

export type StepperSizes = 'S' | 'M' | 'L';

export interface StepperTheme {
    sizes: {
        [k in StepperSizes]: {
            counterSize: string;
            fontVariant: FontVariants;
        };
    };
    defaultSize: StepperSizes;
    counterColor: string;
    activeColor: string;
    inactiveColor: string;
}
