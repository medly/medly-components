/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { ModalContextType } from './types';

export const defaultValues: ModalContextType = {
    headerHeight: 120,
    setHeaderHeight: (): void => {},
    scrollState: {
        scrolledToTop: true,
        scrolledToBottom: false,
        scrollPosition: 120
    },
    dispatch: (): void => {},
    id: 'default-id',
    isSmallScreen: false,
    overflowVisible: false
};

export const ModalContext = createContext<ModalContextType>(defaultValues);
