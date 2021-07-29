import React from 'react';
import { TabBackground, TabSize, Variant } from './types';

export const TabsContext = React.createContext<{
    tabSize?: TabSize;
    tabBackground?: TabBackground;
    variant?: Variant;
}>({});
