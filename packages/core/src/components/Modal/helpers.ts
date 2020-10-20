import React, { useEffect } from 'react';
import { UseScrollStateProps } from './types';

export const getRemFromPx = (px: number) => (px ? px / 10 : 0);

export const useScrollState = ({ ref, scrollState, dispatch }: UseScrollStateProps): ((e: React.UIEvent<HTMLDivElement>) => void) => {
    useEffect(() => {
        const element = ref.current as HTMLElement;
        ref.current && dispatch({ type: 'scrolledToBottom', value: element.clientHeight === element.scrollHeight });
    }, [ref.current]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const element = e.target as HTMLElement,
            isScrolledToTop = element.scrollTop === 0,
            isScrolledToBottom = Math.ceil(element.scrollTop + element.clientHeight) === element.scrollHeight;

        scrollState.scrolledToTop !== isScrolledToTop && dispatch({ type: 'scrolledToTop', value: isScrolledToTop });
        scrollState.scrolledToBottom !== isScrolledToBottom && dispatch({ type: 'scrolledToBottom', value: isScrolledToBottom });
        dispatch({ type: 'scrollPosition', value: element.scrollTop });
    };

    return handleScroll;
};
