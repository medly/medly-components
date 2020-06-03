import { ExpandMoreIcon } from '@medly-components/icons';
import React, { SFC, useCallback, useState } from 'react';
import Text from '../Text';
import { Content, Section, Wrapper } from './Accordion.styled';
import { Props } from './types';

export const Accordion: SFC<Props> = React.memo(({ title, titleColor, bgColor, children }) => {
    const [active, setActive] = useState(false),
        toggleAccordion = useCallback(() => setActive(val => !val), []);

    return (
        <Section bgColor={bgColor}>
            <Wrapper isActive={active} onClick={toggleAccordion}>
                <Text textVariant="body1" textColor={titleColor}>
                    {title}
                </Text>
                <ExpandMoreIcon />
            </Wrapper>

            {active && <Content>{children}</Content>}
        </Section>
    );
});

Accordion.displayName = 'Accordion';
