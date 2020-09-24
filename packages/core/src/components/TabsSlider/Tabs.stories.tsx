import { defaultTheme, TabsSliderTheme } from '@medly-components/theme';
import React from 'react';

export const ThemeInterface: React.FC<TabsSliderTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.tabsSlider
};
