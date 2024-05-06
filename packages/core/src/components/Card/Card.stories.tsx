import { CardTheme, defaultTheme } from '@medly-components/theme';
import type { FCC } from 'react';
import { CardProps } from './types';

export const variants: CardProps['variant'][] = ['solid', 'flat'];
export const display: CardProps['display'][] = ['block', 'flex'];
export const itemsPosition: CardProps['alignItems'][] = ['top', 'bottom', 'left', 'right', 'center'];
export const flowDirection: CardProps['flowDirection'][] = ['vertical', 'horizontal'];

export const ThemeInterface: FCC<CardTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.card
};
