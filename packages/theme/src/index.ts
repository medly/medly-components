export * from './types';
import { coreDefaultTheme, CoreTheme } from './core';

// tslint:disable-next-line: no-empty-interface
export interface Theme extends CoreTheme {}
export const defaultTheme = { ...coreDefaultTheme };

export { CoreTheme, coreDefaultTheme };
