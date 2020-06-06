import { defaultTheme, ToastTheme } from '@medly-components/theme';
import React from 'react';
import { Props } from './types';

export const variants: Props['variant'][] = ['error', 'warning', 'success', 'info'];

export const ThemeInterface: React.SFC<ToastTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.toast
};

export const ThemeInterface: React.SFC<ToastTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.toast
};
