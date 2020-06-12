import { createContext } from 'react';
import { AccordionContextType } from './types';

export const AccordionContext = createContext<AccordionContextType | null>(null);
