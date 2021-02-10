import React, { useContext, useRef } from 'react';
import { WithStyle } from '@medly-components/utils';
import { ContentStyled } from './Content.styled';
import { useScrollState } from '../../Modal/useScrollState';
import { DrawerContext } from '../Drawer.context';

export const Content: React.FC & WithStyle = React.memo(({ children }) => {
    const { dispatch, scrollState } = useContext(DrawerContext),
        contentRef = useRef(),
        handleScroll = useScrollState({ ref: contentRef, scrollState, dispatch });

    return (
        <ContentStyled ref={contentRef} onScroll={handleScroll}>
            {children}
        </ContentStyled>
    );
});

Content.displayName = 'DrawerContent';
Content.Style = ContentStyled;
