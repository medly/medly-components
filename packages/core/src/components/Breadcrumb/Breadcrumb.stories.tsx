import { BreadcrumbTheme, defaultTheme } from '@medly-components/theme';
import type { FC } from 'react';

export const ThemeInterface: FC<BreadcrumbTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.breadcrumb
};
