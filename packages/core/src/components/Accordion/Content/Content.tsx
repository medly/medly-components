import { WithStyle } from '@medly-components/utils';
import { useContext, memo } from 'react';
import { AccordionContext } from '../AccordionContext';
import { Wrapper } from './Content.styled';
import type { FC } from 'react';

const Component: FC = memo(props => {
    const [isActive] = useContext(AccordionContext);

    return <Wrapper role="region" isActive={isActive} {...props} />;
});
Component.displayName = 'Content';
export const Content: FC & WithStyle = Object.assign(Component, { Style: Wrapper });
