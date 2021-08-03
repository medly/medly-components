import { defaultTheme, RadioTheme } from '@medly-components/theme';
import React from 'react';
import { RadioProps } from './types';

export const labelPositions: RadioProps['labelPosition'][] = ['left', 'right', 'top', 'bottom'];
export const sizes: RadioProps['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface: React.FC<RadioTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.radio
};
