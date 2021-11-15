import { createContext } from 'react';
import { TabBackground, TabSize, Variant } from './types';

export const TabsContext = createContext<{
    tabSize: TabSize;
    tabBackground: TabBackground;
    variant: Variant;
}>({ tabSize: 'S', variant: 'flat', tabBackground: 'WHITE' });
