import React from 'react';

export interface Context {
    isOpen: boolean;
    onClose: () => void;
}

const HeaderContext = React.createContext<Context>(null);

export default HeaderContext;
