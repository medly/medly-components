import { WithStyle } from '@medly-components/utils';
import { memo, useContext, useRef } from 'react';
import { useScrollState } from '../../Modal/useScrollState';
import { DrawerContext } from '../Drawer.context';
import { ContentStyled } from './Content.styled';
import type { FC } from 'react';

const Component: FC = memo(props => {
    const contentRef = useRef<HTMLDivElement>(null),
        { id, dispatch, scrollState } = useContext(DrawerContext),
        handleScroll = useScrollState({ ref: contentRef, scrollState, dispatch });

    return <ContentStyled ref={contentRef} onScroll={handleScroll} {...props} id={`${id}-content`} />;
});

Component.displayName = 'DrawerContent';
export const Content: FC & WithStyle = Object.assign(Component, { Style: ContentStyled });
