import { useScrollState, WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo, useContext, useRef } from 'react';
import { DrawerContext } from '../Drawer.context';
import { ContentStyled } from './Content.styled';

const Component: FC = memo(props => {
    const contentRef = useRef<HTMLDivElement>(null),
        { id, dispatch, scrollState } = useContext(DrawerContext),
        handleScroll = useScrollState({ ref: contentRef, scrollState, dispatch });

    return <ContentStyled ref={contentRef} onScroll={handleScroll} {...props} id={`${id}-content`} />;
});

Component.displayName = 'DrawerContent';
export const Content: FC & WithStyle = Object.assign(Component, { Style: ContentStyled });
