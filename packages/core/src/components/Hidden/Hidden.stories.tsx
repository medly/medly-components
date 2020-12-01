import { BreakpointsTheme, defaultTheme } from '@medly-components/theme';
import React from 'react';

export const BreakpointsThemeInterface: React.FC<BreakpointsTheme> = () => null;
BreakpointsThemeInterface.defaultProps = {
    ...defaultTheme.breakpoints
};
