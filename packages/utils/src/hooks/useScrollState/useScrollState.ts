import type { UIEvent } from 'react';
import { useEffect } from 'react';
import type { UseScrollStateProps } from './types';

export const useScrollState = ({ ref, scrollState, dispatch }: UseScrollStateProps): ((e: React.UIEvent<HTMLDivElement>) => void) => {
    useEffect(() => {
        const element = ref.current as HTMLElement;
        ref.current &&
            dispatch({
                type: 'scrolledToBottom',
                value: Math.abs(Math.floor(element.getBoundingClientRect().height) - element.scrollHeight) <= 1
            });
    }, []);

    const handleScroll = (e: UIEvent<HTMLDivElement>) => {
        // e.stopPropagation(); /* Allowing event to propagate for table minimap table scroll handle */
        const element = e.target as HTMLElement,
            isScrolledToTop = element.scrollTop === 0,
            isScrolledToBottom =
                Math.abs(Math.floor(element.scrollTop + element.getBoundingClientRect().height) - element.scrollHeight) <= 5;
        scrollState.scrolledToTop !== isScrolledToTop && dispatch({ type: 'scrolledToTop', value: isScrolledToTop });
        scrollState.scrolledToBottom !== isScrolledToBottom && dispatch({ type: 'scrolledToBottom', value: isScrolledToBottom });
        dispatch({ type: 'scrollPosition', value: element.scrollTop });
    };

    return handleScroll;
};
