import * as CoreThemes from './core/types';
import { IconTheme } from './icon/types';
import * as LayoutThemes from './layout/types';
import { LoaderTheme } from './loader/types';

export interface CoreTheme {
    avatar?: CoreThemes.AvatarTheme;
    breadCrumbs?: CoreThemes.BreadCrumbsTheme;
    button?: CoreThemes.ButtonTheme;
    card?: CoreThemes.CardTheme;
    checkbox?: CoreThemes.CheckboxTheme;
    chip?: CoreThemes.ChipTheme;
    colors?: CoreThemes.ColorPallet;
    datePicker?: CoreThemes.DatePickerTheme;
    font?: CoreThemes.FontTheme;
    input?: CoreThemes.InputTheme;
    label?: CoreThemes.LabelTheme;
    link?: CoreThemes.LinkTheme;
    modal?: CoreThemes.ModalTheme;
    radio?: CoreThemes.RadioTheme;
    select?: CoreThemes.SelectTheme;
    spacing?: CoreThemes.SpacingTheme;
    stepper?: CoreThemes.StepperTheme;
    table?: CoreThemes.TableTheme;
    toggle?: CoreThemes.ToggleTheme;
    tabs?: CoreThemes.TabsTheme;
    text?: CoreThemes.TextTheme;
    toast?: CoreThemes.ToastTheme;
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
export * from './icon/types';
export * from './layout/types';
export * from './loader/types';
