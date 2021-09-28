import { WithStyle } from '@medly-components/utils';
import React, { useContext, useRef } from 'react';
import { useScrollState } from '../../Modal/useScrollState';
import { DrawerContext } from '../Drawer.context';
import { ContentStyled } from './Content.styled';

const Component: React.FC = React.memo(props => {
    const contentRef = useRef(),
        { id, dispatch, scrollState } = useContext(DrawerContext),
        handleScroll = useScrollState({ ref: contentRef, scrollState, dispatch });

    return <ContentStyled ref={contentRef} onScroll={handleScroll} {...props} id={`${id}-content`} />;
});

Component.displayName = 'DrawerContent';
export const Content: React.FC & WithStyle = Object.assign(Component, { Style: ContentStyled });
