import { createContext } from 'react';
import { TableProps } from './types';

export const TablePropsContext = createContext<(TableProps & { isGroupedTable: boolean }) | null>(null);
