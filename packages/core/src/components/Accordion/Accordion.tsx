import { memo, useState } from 'react';
import { Section } from './Accordion.styled';
import { AccordionContext } from './AccordionContext';
import Content from './Content';
import Header from './Header';
import { StaticProps } from './types';
import type { FC } from 'react';
const Component: FC = memo(props => {
    const activeState = useState(false);

    return (
        <AccordionContext.Provider value={activeState}>
            <Section {...props} />
        </AccordionContext.Provider>
    );
});
Component.displayName = 'Accordion';

export const Accordion: FC & StaticProps = Object.assign(Component, {
    Header,
    Content,
    Context: AccordionContext
});
