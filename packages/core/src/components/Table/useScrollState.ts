import { useState } from 'react';

type Result = [
    {
        isScrolledToTop: boolean;
        isScrolledToLeft: boolean;
        // isScrolledToRight: boolean;
        // isScrolledToBottom: boolean;
    },
    (e: React.UIEvent<HTMLDivElement>) => void
];
export const useScrollState = (): Result => {
    const [scrollState, setScrollState] = useState({
        isScrolledToTop: true,
        isScrolledToLeft: true
        // isScrolledToRight: true,
        // isScrolledToBottom: true
    });

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const element = e.target as HTMLElement,
            { scrollTop, scrollLeft } = element,
            isScrolledToTop = scrollTop === 0,
            isScrolledToLeft = scrollLeft === 0;
        // isScrolledToRight = Math.floor(scrollLeft + clientWidth) === scrollWidth,
        // isScrolledToBottom = Math.floor(scrollTop + clientHeight) === scrollHeight;

        if (
            isScrolledToTop !== scrollState.isScrolledToTop ||
            isScrolledToLeft !== scrollState.isScrolledToLeft
            // isScrolledToRight !== scrollState.isScrolledToRight ||
            // isScrolledToBottom !== scrollState.isScrolledToBottom
        ) {
            setScrollState({ isScrolledToTop, isScrolledToLeft });
        }
    };

    return [scrollState, handleScroll];
};
