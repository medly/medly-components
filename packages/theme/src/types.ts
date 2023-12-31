import * as CoreThemes from './core/types';
import { IconTheme } from './icon/types';
import * as LayoutThemes from './layout/types';
import { LoaderTheme } from './loader/types';

export interface CoreTheme {
    avatar: CoreThemes.AvatarTheme;
    breakpoints: CoreThemes.BreakpointsTheme;
    breadcrumb: CoreThemes.BreadcrumbTheme;
    button: CoreThemes.ButtonTheme;
    card: CoreThemes.CardTheme;
    calendar: CoreThemes.CalendarTheme;
    cardTable: CoreThemes.CardTableTheme;
    checkbox: CoreThemes.CheckboxTheme;
    chip: CoreThemes.ChipTheme;
    colors: CoreThemes.ColorPallet;
    drawer: CoreThemes.DrawerTheme;
    datePicker: CoreThemes.DatePickerTheme;
    dateRangePicker: CoreThemes.DateRangePickerTheme;
    font: CoreThemes.FontTheme;
    input: CoreThemes.InputTheme;
    label: CoreThemes.LabelTheme;
    link: CoreThemes.LinkTheme;
    modal: CoreThemes.ModalTheme;
    multiSelect: CoreThemes.MultiSelectTheme;
    radio: CoreThemes.RadioTheme;
    singleSelect: CoreThemes.SingleSelectTheme;
    searchBox: CoreThemes.SearchBoxTheme;
    spacing: CoreThemes.SpacingTheme;
    stepper: CoreThemes.StepperTheme;
    table: CoreThemes.TableTheme;
    toggle: CoreThemes.ToggleTheme;
    tabs: CoreThemes.TabsTheme;
    textField: CoreThemes.TextFieldTheme;
    timePicker: CoreThemes.TimePickerTheme;
    toast: CoreThemes.ToastTheme;
    pagination: CoreThemes.PaginationTheme;
    helperAndErrorTextTooltip: CoreThemes.HelperAndErrorTextTooltipTheme;
}

export interface LayoutTheme {
    header: LayoutThemes.HeaderTheme;
    sideNav: LayoutThemes.SideNavTheme;
    sidePanel: LayoutThemes.SidePanelTheme;
}

export interface Theme extends CoreTheme, LayoutTheme {
    loader: LoaderTheme;
    icon: IconTheme;
}

export * from './core/types';
export * from './icon/types';
export * from './layout/types';
export * from './loader/types';
