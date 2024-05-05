import { BreakpointsTheme, defaultTheme } from '@medly-components/theme';
import type { FCC } from 'react';

export const BreakpointsThemeInterface: FCC<BreakpointsTheme> = () => null;
BreakpointsThemeInterface.defaultProps = {
    ...defaultTheme.breakpoints
};
