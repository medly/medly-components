import { defaultTheme, FontFaceTheme, FontSizeTheme, FontTheme, FontWeightTheme } from '@medly-components/theme';
import * as React from 'react';

export const FontThemeInterface: React.SFC<FontTheme> = () => null;
FontThemeInterface.defaultProps = {
    ...defaultTheme.font
};
export const FontFaceThemeInterface: React.SFC<FontFaceTheme> = () => null;
FontFaceThemeInterface.defaultProps = {
    ...defaultTheme.font.faces[0]
};

export const FontSizeThemeInterface: React.SFC<FontSizeTheme> = () => null;
FontSizeThemeInterface.defaultProps = {
    ...defaultTheme.font.sizes
};
export const FontWeightThemeInterface: React.SFC<FontWeightTheme> = () => null;
FontWeightThemeInterface.defaultProps = {
    ...defaultTheme.font.weights
};
