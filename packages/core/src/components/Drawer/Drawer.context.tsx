import { createContext } from 'react';
import { DrawerContextType } from './types';

// default values are for testing purposes
export const defaultValues: DrawerContextType = {
    scrollState: {
        scrolledToTop: true,
        scrolledToBottom: false,
        scrollPosition: 0
    },
    dispatch: (): void => null,
    onClose: (): void => null
};

export const DrawerContext = createContext<DrawerContextType>(defaultValues);
