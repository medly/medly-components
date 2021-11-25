import { defaultTheme, ToggleTheme } from '@medly-components/theme';
import type { FC } from 'react';
import { ToggleProps } from './types';

export const labelPositions: ToggleProps['labelPosition'][] = ['left', 'right', 'top', 'bottom'];
export const sizes: ToggleProps['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface: FC<ToggleTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.toggle
};
