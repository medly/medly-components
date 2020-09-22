import React from 'react';
import { TabSize, TabStyle, TabBackground } from './types';

export const TabsContext = React.createContext<{
    tabSize?: TabSize;
    tabStyle?: TabStyle;
    tabBackground?: TabBackground;
}>({});
