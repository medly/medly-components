import * as CoreThemes from './core/types';
import * as LayoutThemes from './layout/types';

export interface CoreTheme {
    avatar?: CoreThemes.AvatarTheme;
    label?: CoreThemes.LabelTheme;
    icon?: CoreThemes.IconTheme;
    modal?: CoreThemes.ModalTheme;
    card?: CoreThemes.CardTheme;
    button?: CoreThemes.ButtonTheme;
    colors?: CoreThemes.ColorPallet;
    checkbox?: CoreThemes.CheckboxTheme;
    radio?: CoreThemes.RadioTheme;
    font?: CoreThemes.FontTheme;
    input?: CoreThemes.InputTheme;
    select?: CoreThemes.SelectTheme;
    spacing?: CoreThemes.SpacingTheme;
    text?: CoreThemes.TextTheme;
}

export interface LayoutTheme {
    sidenav?: LayoutThemes.SideNavTheme;
}

export interface Theme extends CoreTheme, LayoutTheme {}

export * from './core/types';
export * from './layout/types';
