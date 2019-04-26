import { Theme } from '@medly-components/theme';
import * as styledComponents from 'styled-components';

// tslint:disable-next-line: no-duplicate-imports
import { ThemedStyledComponentsModule } from 'styled-components';
const { default: styled, css, createGlobalStyle, keyframes, ThemeProvider, withTheme } = styledComponents as ThemedStyledComponentsModule<
    Theme
>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider, withTheme };
