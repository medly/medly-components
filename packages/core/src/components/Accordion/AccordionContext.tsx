import { createContext } from 'react';
import { AccordionContextType } from './types';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const AccordionContext = createContext<AccordionContextType>([false, () => {}]);
