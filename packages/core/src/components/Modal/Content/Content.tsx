import { WithStyle } from '@medly-components/utils';
import React, { useContext, useRef } from 'react';
import { ModalContext } from '../Modal.context';
import { useScrollState } from '../useScrollState';
import * as Styled from './Content.styled';

const Component: React.FC = React.memo(props => {
    const { id, dispatch, scrollState, headerHeight } = useContext(ModalContext),
        contentRef = useRef(),
        handleScroll = useScrollState({ ref: contentRef, scrollState, dispatch });

    return <Styled.Content ref={contentRef} onScroll={handleScroll} {...{ headerHeight, scrollState, id: `${id}-content` }} {...props} />;
});
Component.displayName = 'Content';
export const Content: React.FC & WithStyle = Object.assign(Component, { Style: Styled.Content });
