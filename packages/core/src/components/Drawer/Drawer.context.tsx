/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { DrawerContextType } from './types';

export const defaultValues: DrawerContextType = {
    id: 'default-id',
    scrollState: {
        scrolledToTop: true,
        scrolledToBottom: false,
        scrollPosition: 0
    },
    dispatch: (): void => {},
    onClose: (): void => {}
};

export const DrawerContext = createContext<DrawerContextType>(defaultValues);
