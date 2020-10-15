import { defaultTheme, PaginationTheme } from '@medly-components/theme';
import React from 'react';

export const ThemeInterface: React.FC<PaginationTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.pagination
};
