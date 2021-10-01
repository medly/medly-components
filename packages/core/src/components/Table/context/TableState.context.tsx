import React from 'react';
import { TableState } from '../types';

export const TableStateContext = React.createContext<[TableState, React.Dispatch<React.SetStateAction<TableState>>]>([{}, () => null]);
