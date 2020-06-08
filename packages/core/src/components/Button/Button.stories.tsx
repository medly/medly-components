import { ButtonTheme, defaultTheme } from '@medly-components/theme';
import React from 'react';
import { Props } from './types';

export const sizes: Props['size'][] = ['S', 'M'];
export const edges: Props['edges'][] = ['square', 'rounded', 'circle'];
export const variants: Props['variant'][] = ['solid', 'flat', 'outlined'];
export const colors: Props['color'][] = ['default', 'confirmation', 'error'];

export const ThemeInterface: React.SFC<ButtonTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.button
};
