import sidenav from './sidenav';

import * as Themes from './types';

export const layoutDefaultTheme = {
    sidenav
};

export interface LayoutTheme {
    sidenav?: Themes.SideNavTheme;
}
