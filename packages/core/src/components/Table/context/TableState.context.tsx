import { createContext } from 'react';
import { TableState } from '../types';

export const TableStateContext = createContext<[TableState, React.Dispatch<React.SetStateAction<TableState>>]>([{}, () => null]);
