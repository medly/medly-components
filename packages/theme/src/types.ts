import * as CoreThemes from './core/types';
import { IconTheme } from './icon/types';
import * as LayoutThemes from './layout/types';
import { LoaderTheme } from './loader/types';

export interface CoreTheme {
    avatar?: CoreThemes.AvatarTheme;
    breadCrumbs?: CoreThemes.BreadCrumbsTheme;
    label?: CoreThemes.LabelTheme;
    link?: CoreThemes.LinkTheme;
    modal?: CoreThemes.ModalTheme;
    table?: CoreThemes.TableTheme;
    card?: CoreThemes.CardTheme;
    button?: CoreThemes.ButtonTheme;
    chip?: CoreThemes.ChipTheme;
    colors?: CoreThemes.ColorPallet;
    checkbox?: CoreThemes.CheckboxTheme;
    radio?: CoreThemes.RadioTheme;
    font?: CoreThemes.FontTheme;
    input?: CoreThemes.InputTheme;
    select?: CoreThemes.SelectTheme;
    stepper?: CoreThemes.StepperTheme;
    spacing?: CoreThemes.SpacingTheme;
    text?: CoreThemes.TextTheme;
}

export interface LayoutTheme {
    sideNav?: LayoutThemes.SideNavTheme;
    sidePanel?: LayoutThemes.SidePanelTheme;
}

export interface Theme extends CoreTheme, LayoutTheme {
    loader?: LoaderTheme;
    icon?: IconTheme;
}

export * from './core/types';
export * from './loader/types';
export * from './icon/types';
export * from './layout/types';
