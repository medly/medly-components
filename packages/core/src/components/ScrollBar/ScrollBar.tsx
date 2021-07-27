import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import * as Styled from './ScrollBar.styled';
import { ScrollBarProps } from './types';

const SCROLL_BOX_MIN_HEIGHT = 20;

export const ScrollBar: FC<ScrollBarProps> = ({ children }) => {
    const scrollRef = useRef<HTMLDivElement>(null),
        [hovering, setHovering] = useState<boolean>(false),
        [scrollBoxHeight, setScrollBoxHeight] = useState<number>(SCROLL_BOX_MIN_HEIGHT),
        [scrollBoxTop, setScrollBoxTop] = useState<number>(0),
        [lastScrollThumbPosition, setScrollThumbPosition] = useState<number>(0),
        [isDragging, setDragging] = useState<boolean>(false);

    const handleMouseOver = useCallback(() => {
        const scrollHostElement = scrollRef.current,
            { clientHeight, scrollHeight } = scrollHostElement;

        if (clientHeight !== scrollHeight) {
            !hovering && setHovering(true);
        }
    }, [hovering]);

    const handleMouseOut = useCallback(() => hovering && setHovering(false), [hovering]);

    const handleDocumentMouseUp = useCallback(
        e => {
            if (isDragging) {
                e.preventDefault();
                setDragging(false);
            }
        },
        [isDragging]
    );
    const handleScrollThumbMouseDown = useCallback(e => {
        e.preventDefault();
        e.stopPropagation();
        setScrollThumbPosition(e.clientY);
        setDragging(true);
    }, []);

    const handleDocumentMouseMove = useCallback(
        e => {
            if (isDragging) {
                e.preventDefault();
                e.stopPropagation();
                const scrollHostElement = scrollRef.current;
                const { scrollHeight, offsetHeight } = scrollHostElement;
                const deltaY = e.clientY - lastScrollThumbPosition;
                const percentage = deltaY * (scrollHeight / offsetHeight);
                setScrollThumbPosition(e.clientY);
                setScrollBoxTop(Math.min(Math.max(0, scrollBoxTop + deltaY), offsetHeight - scrollBoxHeight));
                scrollHostElement.scrollTop = Math.min(scrollHostElement.scrollTop + percentage, scrollHeight - offsetHeight);
            }
        },
        [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop]
    );
    const handleScroll = useCallback(() => {
        if (!scrollRef) return;
        const scrollHostElement = scrollRef.current;
        const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement;
        let newTop = (scrollTop / scrollHeight) * offsetHeight;
        newTop = Math.min(newTop, offsetHeight - scrollBoxHeight);
        setScrollBoxTop(newTop);
    }, []);

    useEffect(() => {
        const scrollHostElement = scrollRef.current,
            { clientHeight, scrollHeight } = scrollHostElement,
            scrollThumbPercentage = clientHeight / scrollHeight,
            scrollThumbHeight = Math.max(scrollThumbPercentage * clientHeight, SCROLL_BOX_MIN_HEIGHT);
        setScrollBoxHeight(scrollThumbHeight);
        scrollHostElement.addEventListener('scroll', handleScroll, true);
        return () => scrollHostElement.removeEventListener('scroll', handleScroll, true);
    }, []);

    useEffect(() => {
        document.addEventListener('mousemove', handleDocumentMouseMove);
        document.addEventListener('mouseup', handleDocumentMouseUp);
        document.addEventListener('mouseleave', handleDocumentMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleDocumentMouseMove);
            document.removeEventListener('mouseup', handleDocumentMouseUp);
            document.removeEventListener('mouseleave', handleDocumentMouseUp);
        };
    }, [handleDocumentMouseMove, handleDocumentMouseUp]);

    return (
        <>
            <Styled.Container ref={scrollRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {children}
            </Styled.Container>
            <Styled.ScrollBarContainer hovering={hovering}>
                <Styled.ScrollThumb height={scrollBoxHeight} top={scrollBoxTop} onMouseDown={handleScrollThumbMouseDown} />
            </Styled.ScrollBarContainer>
        </>
    );
};
ScrollBar.displayName = 'ScrollBar';
