import * as Themes from './types';

export interface Theme {
    button?: Themes.ButtonTheme;
    colors?: Themes.ColorPallet;
    font?: Themes.FontTheme;
    input?: Themes.InputTheme;
    spacing?: Themes.SpacingTheme;
    text?: Themes.TextTheme;
}

export * from './types';
export * from './defaultTheme';
