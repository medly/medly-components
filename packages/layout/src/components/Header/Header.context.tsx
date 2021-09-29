import React from 'react';

export interface Context {
    isOpen: boolean;
    onClose: () => void;
}

const HeaderContext = React.createContext<Context>({ isOpen: false, onClose: () => null });

export default HeaderContext;
