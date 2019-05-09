export * from './types';
import { coreDefaultTheme } from './core';
import { layoutDefaultTheme } from './layout';

export const defaultTheme = { ...coreDefaultTheme, ...layoutDefaultTheme };

export { coreDefaultTheme, layoutDefaultTheme };
