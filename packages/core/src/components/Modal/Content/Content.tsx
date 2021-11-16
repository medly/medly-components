import { WithStyle } from '@medly-components/utils';
import { useContext, useRef, memo } from 'react';
import { ModalContext } from '../Modal.context';
import { useScrollState } from '../useScrollState';
import * as Styled from './Content.styled';
import type { FC } from 'react';

const Component: FC = memo(props => {
    const { id, dispatch, scrollState, headerHeight } = useContext(ModalContext),
        contentRef = useRef<HTMLDivElement>(null),
        handleScroll = useScrollState({ ref: contentRef, scrollState, dispatch });

    return <Styled.Content ref={contentRef} onScroll={handleScroll} {...{ headerHeight, scrollState, id: `${id}-content` }} {...props} />;
});
Component.displayName = 'Content';
export const Content: FC & WithStyle = Object.assign(Component, { Style: Styled.Content });
