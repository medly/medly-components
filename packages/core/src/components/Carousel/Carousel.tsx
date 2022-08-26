import { FC, useEffect, useRef, useState } from 'react';
import { CarouselScroll, CarouselWrapper, LeftArrowIcon, RightArrowIcon } from './Carousel.styled';
import { CarouselProps } from './types';

export const Carousel: FC<CarouselProps> = ({ children, itemsCount, withVariableWidth, arrowPositionFromTop, ...restProps }) => {
    const carouselRef = useRef<HTMLUListElement>(null),
        [isScrolledToLeft, setIsScrolledToLeft] = useState(true),
        [isScrolledToRight, setIsScrolledToRight] = useState(false);

    const getScrollWidth = () =>
            carouselRef.current
                ? withVariableWidth
                    ? carouselRef.current?.clientWidth * 0.4
                    : carouselRef.current?.children[0].clientWidth
                : 0,
        scrollNext = () => carouselRef.current?.scrollBy({ left: getScrollWidth(), behavior: 'smooth' }),
        scrollPrev = () => carouselRef.current?.scrollBy({ left: -getScrollWidth(), behavior: 'smooth' });

    const handleScroll = () => {
        if (carouselRef.current) {
            setIsScrolledToLeft(carouselRef.current.scrollLeft === 0);
            setIsScrolledToRight(carouselRef.current.scrollWidth - (carouselRef.current.scrollLeft + carouselRef.current.clientWidth) <= 1);
        }
    };

    useEffect(() => {
        carouselRef.current && setIsScrolledToRight(carouselRef.current?.clientWidth === carouselRef.current?.scrollWidth);
    }, [carouselRef.current?.scrollWidth]);

    return (
        <CarouselWrapper {...restProps}>
            <LeftArrowIcon
                disabled={isScrolledToLeft}
                data-testid="carousel-left-arrow-icon"
                onClick={scrollPrev}
                top={arrowPositionFromTop}
            />
            <CarouselScroll ref={carouselRef} data-testid="carousel-scroll" onScroll={handleScroll} itemsCount={itemsCount}>
                {children}
            </CarouselScroll>
            <RightArrowIcon
                data-testid="carousel-right-arrow-icon"
                disabled={isScrolledToRight}
                onClick={scrollNext}
                top={arrowPositionFromTop}
            />
        </CarouselWrapper>
    );
};
