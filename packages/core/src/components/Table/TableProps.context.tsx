import { createContext } from 'react';
import { Props } from './types';

export const TablePropsContext = createContext<Props | null>(null);
