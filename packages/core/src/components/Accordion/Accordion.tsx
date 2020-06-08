import React, { ReactElement, SFC, useCallback, useState } from 'react';
import { Section } from './Accordion.styled';
import { AccordionContext } from './AccordionContext';
import Content from './Content';
import Title from './Title';
import { Props } from './types';

export const Accordion: SFC & Props = React.memo(({ children }) => {
    const [title, content] = React.Children.toArray(children) as ReactElement[],
        [isActive, setIsActive] = useState(false);

    const handleToggle = useCallback(() => setIsActive(!isActive), [isActive]),
        contextValue = React.useMemo(() => ({ isActive, toggle: handleToggle }), [isActive, setIsActive]);

    return (
        <Section>
            <AccordionContext.Provider value={contextValue}>{title}</AccordionContext.Provider>
            {isActive && content}
        </Section>
    );
});

Accordion.displayName = 'Accordion';
Accordion.Title = Title;
Accordion.Content = Content;
