export * from './types';
import { coreDefaultTheme } from './core';
import icon from './icon';
import { layoutDefaultTheme } from './layout';
import loader from './loader';

export const defaultTheme = { ...coreDefaultTheme, ...layoutDefaultTheme, icon, loader };

export { coreDefaultTheme, layoutDefaultTheme, loader as loaderDefaultTheme, icon as iconDefaultTheme };
