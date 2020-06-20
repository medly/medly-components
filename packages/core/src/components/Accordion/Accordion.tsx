import React, { FC, useState } from 'react';
import { Section } from './Accordion.styled';
import { AccordionContext } from './AccordionContext';
import Content from './Content';
import Header from './Header';
import { StaticProps } from './types';

export const Accordion: FC & StaticProps = React.memo(props => {
    const activeState = useState(false);

    return (
        <AccordionContext.Provider value={activeState}>
            <Section {...props} />
        </AccordionContext.Provider>
    );
});

Accordion.displayName = 'Accordion';
Accordion.Header = Header;
Accordion.Content = Content;
Accordion.Context = AccordionContext;
