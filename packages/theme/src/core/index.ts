import button from './button';
import colors from './colors';
import font from './font';
import icon from './icon';
import input from './input';
import label from './label';
import modal from './modal';
import spacing from './spacing';
import text from './text';

import * as Themes from './types';

export const coreDefaultTheme = {
    button,
    label,
    colors,
    icon,
    modal,
    font,
    input,
    spacing,
    text
};

export interface CoreTheme {
    label?: Themes.LabelTheme;
    icon?: Themes.IconTheme;
    modal?: Themes.ModalTheme;
    button?: Themes.ButtonTheme;
    colors?: Themes.ColorPallet;
    font?: Themes.FontTheme;
    input?: Themes.InputTheme;
    spacing?: Themes.SpacingTheme;
    text?: Themes.TextTheme;
}
