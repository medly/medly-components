import { defaultTheme, ToggleTheme } from '@medly-components/theme';
import React from 'react';
import { Props } from './types';

export const labelPositions: Props['labelPosition'][] = ['left', 'right', 'top', 'bottom'];
export const sizes: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface: React.FC<ToggleTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.toggle
};


