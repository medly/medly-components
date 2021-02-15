import { createContext } from 'react';
import { DrawerContextType } from './types';

export const DrawerContext = createContext<DrawerContextType>(null);
