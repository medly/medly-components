import { CardTheme, defaultTheme } from '@medly-components/theme';
import React from 'react';
import { Props } from './types';

export const variants: Props['variant'][] = ['solid', 'flat'];
export const display: Props['display'][] = ['block', 'flex'];
export const itemsPosition: Props['alignItems'][] = ['top', 'bottom', 'left', 'right', 'center'];
export const flowDirection: Props['flowDirection'][] = ['vertical', 'horizontal'];

export const ThemeInterface: React.FC<CardTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.card
};
