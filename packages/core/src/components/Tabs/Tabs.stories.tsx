import { defaultTheme, TabsTheme } from '@medly-components/theme';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { TabBackground, TabSize, TabStyle } from './types';

export const ThemeInterface: React.FC<TabsTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.tabs
};

export const sizes: TabSize[] = ['S', 'M', 'L'];
export const tabBg: TabBackground[] = ['WHITE', 'GREY'];
export const tabStyle: TabStyle[] = ['OPEN', 'CLOSED'];

export const DarkBackground = createGlobalStyle<{ withGreyBackground: TabBackground }>`
#root, #story--core-tabs--basic, #story--tabs--with-grey-background {
    background: ${({ withGreyBackground }) => withGreyBackground === 'GREY' && 'rgba(229, 229, 229, 0.3)'} }
`;
