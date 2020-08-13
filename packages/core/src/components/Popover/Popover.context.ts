import { createContext } from 'react';
import { PopoverContextType } from './types';

export const PopoverContext = createContext<PopoverContextType>([false, () => null]);
