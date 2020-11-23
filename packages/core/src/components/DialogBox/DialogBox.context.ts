import { createContext } from 'react';
import { DialogBoxContextType } from './types';

// default values are for testing purposes
export const defaultValues: DialogBoxContextType = {
    headerHeight: 120,
    setHeaderHeight: (): void => null,
    scrollState: {
        scrolledToTop: true,
        scrolledToBottom: false,
        scrollPosition: 120
    },
    dispatch: (): void => null,
    id: 'default-id',
    isSmallScreen: false
};

export const DialogBoxContext = createContext<DialogBoxContextType>(defaultValues);
