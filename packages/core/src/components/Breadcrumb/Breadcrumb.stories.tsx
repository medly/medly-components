import { BreadcrumbTheme, defaultTheme } from '@medly-components/theme';
import type { FCC } from 'react';

export const ThemeInterface: FCC<BreadcrumbTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.breadcrumb
};
