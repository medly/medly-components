import { ButtonTheme, defaultTheme } from '@medly-components/theme';
import React from 'react';
import { ButtonProps } from './types';

export const sizes: Required<ButtonProps>['size'][] = ['XS', 'S', 'M', 'L'];
export const edges: Required<ButtonProps>['edges'][] = ['square', 'rounded', 'circle'];
export const variants: Required<ButtonProps>['variant'][] = ['solid', 'flat', 'outlined'];
export const colors: Required<ButtonProps>['color'][] = ['default', 'confirmation', 'error'];

export const ThemeInterface: React.FC<ButtonTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.button
};
