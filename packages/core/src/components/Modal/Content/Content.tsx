import { useScrollState, WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo, useContext, useRef } from 'react';
import { ModalContext } from '../Modal.context';
import * as Styled from './Content.styled';

const Component: FC = memo(props => {
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
export const Content: FC & WithStyle = Object.assign(Component, { Style: Styled.Content });
