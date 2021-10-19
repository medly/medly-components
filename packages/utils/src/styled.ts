import { Theme } from '@medly-components/theme';
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider,
    withTheme,
    ThemeContext
} = styledComponents as unknown as ThemedStyledComponentsModule<Theme>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider, withTheme, ThemeContext };
