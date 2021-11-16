import { createContext } from 'react';

export interface Context {
    isOpen: boolean;
    onClose: () => void;
}

const HeaderContext = createContext<Context>({ isOpen: false, onClose: () => null });

export default HeaderContext;
