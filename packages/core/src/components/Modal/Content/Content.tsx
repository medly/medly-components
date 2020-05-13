import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useRef } from 'react';
import * as Styled from './Content.styled';
import { Props } from './types';

export const Content: React.SFC<Props> & WithStyle = React.memo(({ id, scrollState, dispatch, ...restProps }) => {
    const ref = useRef();

    useEffect(() => {
        const element = ref.current as HTMLElement;
        ref.current && dispatch({ type: 'scrolledToBottom', value: element.clientHeight === element.scrollHeight });
    }, [ref.current]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const element = e.target as HTMLElement,
            isScrolledToTop = element.scrollTop === 0,
            isScrolledToBottom = Math.round(element.scrollTop + element.clientHeight) === element.scrollHeight;

        scrollState.scrolledToTop !== isScrolledToTop && dispatch({ type: 'scrolledToTop', value: isScrolledToTop });
        scrollState.scrolledToBottom !== isScrolledToBottom && dispatch({ type: 'scrolledToBottom', value: isScrolledToBottom });
    };

    return <Styled.Content ref={ref} onScroll={handleScroll} {...{ ...restProps, id: `${id}-content` }} />;
});
Content.displayName = 'Content';
Content.Style = Styled.Content;
