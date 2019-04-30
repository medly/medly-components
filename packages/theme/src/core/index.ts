import button from './button';
import colors from './colors';
import font from './font';
import input from './input';
import spacing from './spacing';
import text from './text';

import * as Themes from './types';

export const coreDefaultTheme = {
    button,
    colors,
    font,
    input,
    spacing,
    text
};

export interface CoreTheme {
    button?: Themes.ButtonTheme;
    colors?: Themes.ColorPallet;
    font?: Themes.FontTheme;
    input?: Themes.InputTheme;
    spacing?: Themes.SpacingTheme;
    text?: Themes.TextTheme;
}
