import { defaultTheme, FontFaceItem, FontFaceTheme, FontSizeTheme, FontTheme, FontWeightTheme } from '@medly-components/theme';
import * as React from 'react';

export const FontThemeInterfcae: React.SFC<FontTheme> = () => null;
FontThemeInterfcae.defaultProps = {
    ...defaultTheme.font
};
export const FontFaceThemeInterfcae: React.SFC<FontFaceTheme> = () => null;
FontFaceThemeInterfcae.defaultProps = {
    ...defaultTheme.font.faces[0]
};

export const FontSizeThemeInterfcae: React.SFC<FontSizeTheme> = () => null;
FontSizeThemeInterfcae.defaultProps = {
    ...defaultTheme.font.sizes
};
export const FontWeightThemeInterfcae: React.SFC<FontWeightTheme> = () => null;
FontWeightThemeInterfcae.defaultProps = {
    ...defaultTheme.font.weights
};
