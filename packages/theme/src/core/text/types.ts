import { FontSizeTheme, FontWeightTheme } from '../font/types';

export interface TextTheme {
    defaults: {
        textWeight?: keyof FontWeightTheme;
        textSize?: keyof FontSizeTheme;
    };
}
