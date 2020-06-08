import React, { useContext } from 'react';
import { AccordionContext } from '../AccordionContext';
import { Wrapper } from './Content.styled';

export const Content = React.memo(({ children }) => {
    const { isActive } = useContext(AccordionContext);

    return isActive && <Wrapper>{children}</Wrapper>;
});
Content.displayName = 'Content';
