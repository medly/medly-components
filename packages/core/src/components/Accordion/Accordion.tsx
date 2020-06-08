import React, { SFC, useCallback, useMemo, useState } from 'react';
import { Section } from './Accordion.styled';
import { AccordionContext } from './AccordionContext';
import Content from './Content';
import Title from './Title';
import { StaticProps } from './types';

export const Accordion: SFC & StaticProps = React.memo(({ children }) => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = useCallback(() => setIsActive(val => !val), []),
        contextValue = useMemo(() => ({ isActive, toggle: handleToggle }), [isActive]);

    return (
        <Section>
            <AccordionContext.Provider value={contextValue}>{children}</AccordionContext.Provider>
        </Section>
    );
});

Accordion.displayName = 'Accordion';
Accordion.Title = Title;
Accordion.Content = Content;
