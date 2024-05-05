import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo, useContext, useRef } from 'react';
import { ModalContext } from '../Modal.context';
import { useScrollState } from '../useScrollState';
import * as Styled from './Content.styled';

const Component: FCC = memo(props => {
    const { id, dispatch, scrollState, headerHeight, overflowVisible } = useContext(ModalContext),
        contentRef = useRef<HTMLDivElement>(null),
        handleScroll = useScrollState({ ref: contentRef, scrollState, dispatch });

    return (
        <Styled.Content
            ref={contentRef}
            onScroll={handleScroll}
            {...{ headerHeight, scrollState, id: `${id}-content`, overflowVisible }}
            {...props}
        />
    );
});
Component.displayName = 'Content';
export const Content: FCC & WithStyle = Object.assign(Component, { Style: Styled.Content });
