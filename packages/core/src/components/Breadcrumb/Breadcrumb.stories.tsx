import { BreadcrumbTheme, defaultTheme } from '@medly-components/theme';
import React from 'react';

export const ThemeInterface: React.FC<BreadcrumbTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.breadcrumb
};
