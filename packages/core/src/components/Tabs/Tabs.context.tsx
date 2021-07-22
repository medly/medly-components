import React from 'react';
import { TabBackground, TabSize, TabStyle } from './types';

export const TabsContext = React.createContext<{
    tabSize?: TabSize;
    tabStyle?: TabStyle;
    tabBackground?: TabBackground;
    variant?: 'flat' | 'solid';
}>({});
