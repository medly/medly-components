import { defaultTheme, TabsTheme } from '@medly-components/theme';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Props } from './types';

export const ThemeInterface: React.FC<TabsTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.tabs
};

export const sizes: Props['tabSize'][] = ['S', 'M', 'L'];
export const tabBg: Props['tabBackground'][] = ['WHITE', 'GREY'];
export const tabStyle: Props['tabStyle'][] = ['OPEN', 'CLOSED'];

export const DarkBackground = createGlobalStyle`
    #root, #story--core-tabs--basic, #story--tabs--with-grey-background {
        background: rgba(229, 229, 229, 0.3);
    }
`;
