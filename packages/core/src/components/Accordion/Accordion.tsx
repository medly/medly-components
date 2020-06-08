import React, { ReactElement, SFC, useCallback, useState } from 'react';
import { Section } from './Accordion.styled';
import Content from './Content';
import Title from './Title';
import { Props } from './types';

export const Accordion: SFC & Props = React.memo(({ children }) => {
    const [title, content] = React.Children.toArray(children) as ReactElement[],
        [isActive, setIsActive] = useState(false);

    const handleToggle = useCallback(() => setIsActive(!isActive), [isActive]);

    return (
        <Section>
            <Title isActive={isActive} onToggle={handleToggle} {...title.props}>
                {title.props.children}
            </Title>
            {isActive && <Content>{content.props.children}</Content>}
        </Section>
    );
});

Accordion.displayName = 'Accordion';
Accordion.Title = Title;
Accordion.Content = Content;
