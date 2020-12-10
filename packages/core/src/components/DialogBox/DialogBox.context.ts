import { createContext } from 'react';
import { DialogBoxContextType } from './types';

// default values are for testing purposes
export const defaultValues: DialogBoxContextType = {
    id: 'default-id',
    isSmallScreen: false
};

export const DialogBoxContext = createContext<DialogBoxContextType>(defaultValues);
