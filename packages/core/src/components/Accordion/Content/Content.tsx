import { WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import { AccordionContext } from '../AccordionContext';
import { Wrapper } from './Content.styled';

const Component: React.FC = React.memo(props => {
    const [isActive] = useContext(AccordionContext);

    return <Wrapper role="region" isActive={isActive} {...props} />;
});
Component.displayName = 'Content';
export const Content: React.FC & WithStyle = Object.assign(Component, { Style: Wrapper });
