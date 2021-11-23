import { defaultTheme } from '@medly-components/theme';
import React from 'react';
import { BoxProps } from './types';

export const fontVariants: Required<BoxProps>['fontVariant'][] = ['h1', 'h2', 'h3', 'h4'];
export const colors: Required<BoxProps>['color'][] = ['white', 'black', 'tomato'];
export const bgColors: Required<BoxProps>['bg'][] = ['white', 'black'];

export const ThemeInterface: React.FC = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme
};
