import { defaultTheme, RadioTheme } from '@medly-components/theme';
import { RadioProps } from './types';
import type { FC } from 'react';

export const labelPositions: Required<RadioProps>['labelPosition'][] = ['left', 'right', 'top', 'bottom'];
export const sizes: Required<RadioProps>['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface: FC<RadioTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.radio
};
