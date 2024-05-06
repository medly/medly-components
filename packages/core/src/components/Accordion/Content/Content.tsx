import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo, useContext } from 'react';
import { AccordionContext } from '../AccordionContext';
import { ContentProps } from '../types';
import { Wrapper } from './Content.styled';

const Component: FCC<ContentProps> = memo(props => {
    const [isActive] = useContext(AccordionContext);

    return <Wrapper role="region" isActive={isActive} {...props} />;
});
Component.displayName = 'Content';
export const Content: FCC<ContentProps> & WithStyle = Object.assign(Component, { Style: Wrapper });
