export * from './types';
import { coreDefaultTheme } from './core';
import { layoutDefaultTheme } from './layout';

// tslint:disable-next-line: no-empty-interface
export const defaultTheme = { ...coreDefaultTheme, ...layoutDefaultTheme };

export { coreDefaultTheme, layoutDefaultTheme };
