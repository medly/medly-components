export * from './types';
import { coreDefaultTheme, CoreTheme } from './core';
import { layoutDefaultTheme, LayoutTheme } from './layout';

// tslint:disable-next-line: no-empty-interface
export interface Theme extends CoreTheme, LayoutTheme {}
export const defaultTheme = { ...coreDefaultTheme, ...layoutDefaultTheme };

export { CoreTheme, coreDefaultTheme, LayoutTheme, layoutDefaultTheme };
