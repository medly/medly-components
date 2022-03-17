import { useEffect } from 'react';
import { UseScrollStateProps } from './types';
import type { UIEvent } from 'react';

export const useScrollState = ({ ref, scrollState, dispatch }: UseScrollStateProps): ((e: React.UIEvent<HTMLDivElement>) => void) => {
    useEffect(() => {
        const element = ref.current as HTMLElement;
        ref.current &&
            dispatch({ type: 'scrolledToBottom', value: Math.floor(element.getBoundingClientRect().height) === element.scrollHeight });
    }, [ref.current, ref.current?.scrollHeight]);

    const handleScroll = (e: UIEvent<HTMLDivElement>) => {
        // e.stopPropagation(); /* Allowing event to propagate for table minimap table scroll handle */
        const element = e.target as HTMLElement,
            isScrolledToTop = element.scrollTop === 0,
            isScrolledToBottom = Math.floor(element.scrollTop + element.getBoundingClientRect().height) === element.scrollHeight;
        scrollState.scrolledToTop !== isScrolledToTop && dispatch({ type: 'scrolledToTop', value: isScrolledToTop });
        scrollState.scrolledToBottom !== isScrolledToBottom && dispatch({ type: 'scrolledToBottom', value: isScrolledToBottom });
        dispatch({ type: 'scrollPosition', value: element.scrollTop });
    };

    return handleScroll;
};
