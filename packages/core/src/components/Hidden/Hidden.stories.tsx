import { BreakPointsTheme, defaultTheme } from '@medly-components/theme/src';
import React from 'react';

export const BreakPointsThemeInterface: React.FC<BreakPointsTheme> = () => null;
BreakPointsThemeInterface.defaultProps = {
    ...defaultTheme.breakPoints
};
