import { WithStyle } from '@medly-components/utils';
import React, { useContext, useRef } from 'react';
import { useScrollState } from '../../Modal/useScrollState';
import { DrawerContext } from '../Drawer.context';
import { ContentStyled } from './Content.styled';

export const Content: React.FC & WithStyle = React.memo(props => {
    const contentRef = useRef(),
        { dispatch, scrollState } = useContext(DrawerContext),
        handleScroll = useScrollState({ ref: contentRef, scrollState, dispatch });

    return <ContentStyled ref={contentRef} onScroll={handleScroll} {...props} />;
});

Content.displayName = 'DrawerContent';
Content.Style = ContentStyled;
