import { AccordionTheme, defaultTheme } from '@medly-components/theme';
import React from 'react';

export const ThemeInterface: React.SFC<AccordionTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.accordion
};
