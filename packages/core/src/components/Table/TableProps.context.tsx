import { createContext } from 'react';
import { TableProps } from './types';

export const TablePropsContext = createContext<TableProps | null>(null);
