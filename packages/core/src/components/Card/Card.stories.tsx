import { CardTheme, defaultTheme } from '@medly-components/theme';
import { CardProps } from './types';
import type { FC } from 'react';

export const variants: CardProps['variant'][] = ['solid', 'flat'];
export const display: CardProps['display'][] = ['block', 'flex'];
export const itemsPosition: CardProps['alignItems'][] = ['top', 'bottom', 'left', 'right', 'center'];
export const flowDirection: CardProps['flowDirection'][] = ['vertical', 'horizontal'];

export const ThemeInterface: FC<CardTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.card
};
