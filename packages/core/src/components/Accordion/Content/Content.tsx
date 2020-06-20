import { WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import { AccordionContext } from '../AccordionContext';
import { Wrapper } from './Content.styled';

export const Content: React.FC & WithStyle = React.memo(props => {
    const [isActive] = useContext(AccordionContext);

    return <Wrapper role="region" isActive={isActive} {...props} />;
});
Content.displayName = 'Content';
Content.Style = Wrapper;
