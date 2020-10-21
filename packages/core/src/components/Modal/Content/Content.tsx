import { WithStyle } from '@medly-components/utils';
import React, { useRef } from 'react';
import { useScrollState } from '../useScrollState';
import * as Styled from './Content.styled';
import { Props } from './types';

export const Content: React.FC<Props> & WithStyle = React.memo(({ id, dispatch, scrollState, ...restProps }) => {
    const contentRef = useRef(),
        handleScroll = useScrollState({ ref: contentRef, scrollState, dispatch });

    return <Styled.Content ref={contentRef} onScroll={handleScroll} {...{ ...restProps, dispatch, scrollState, id: `${id}-content` }} />;
});
Content.displayName = 'Content';
Content.Style = Styled.Content;
