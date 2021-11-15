import { BreakpointsTheme, defaultTheme } from '@medly-components/theme';
import type { FC } from 'react';

export const BreakpointsThemeInterface: FC<BreakpointsTheme> = () => null;
BreakpointsThemeInterface.defaultProps = {
    ...defaultTheme.breakpoints
};
