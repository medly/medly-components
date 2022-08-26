import { fireEvent, render, screen } from '@test-utils';
import { Carousel } from './Carousel';

describe('Carousel', () => {
    it('should render properly with the children of variable width', () => {
        const { container } = render(
            <Carousel
                itemsCount={{
                    S: 2.75,
                    M: 3.75,
                    L: 6,
                    XL: 6
                }}
                withVariableWidth
            >
                <span>Hello Dummy Text</span>
                <span>Hello Dummy</span>
            </Carousel>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly with the children of same width', () => {
        const { container } = render(
            <Carousel
                itemsCount={{
                    S: 2.75,
                    M: 3.75,
                    L: 6,
                    XL: 6
                }}
            >
                <span>Hello Dummy</span>
                <span>Hello Dummy</span>
            </Carousel>
        );
        expect(container).toMatchSnapshot();
    });

    it('should make the left arrow disabled on clicking on left arrow', () => {
        render(
            <Carousel
                itemsCount={{
                    S: 2,
                    M: 2,
                    L: 2,
                    XL: 2
                }}
            >
                <span>Hello Dummy</span>
                <span>Hello Dummy</span>
                <span>Hello Dummy</span>
                <span>Hello Dummy</span>
                <span>Hello Dummy</span>
                <span>Hello Dummy</span>
                <span>Hello Dummy</span>
            </Carousel>
        );
        const leftArrow = screen.getByTestId('carousel-left-arrow-icon');
        const element = screen.getByTestId('carousel-scroll');
        expect(leftArrow).toBeDisabled();
        fireEvent.scroll(element, { target: { scrollLeft: 100 } });
        expect(leftArrow).toBeEnabled();
    });

    it('should make the right arrow disabled on clicking on right arrow', () => {
        render(
            <Carousel
                itemsCount={{
                    S: 2,
                    M: 2,
                    L: 2,
                    XL: 2
                }}
            >
                <span>Hello Dummy</span>
                <span>Hello Dummy</span>
                <span>Hello Dummy</span>
                <span>Hello Dummy</span>
                <span>Hello Dummy</span>
                <span>Hello Dummy</span>
                <span>Hello Dummy</span>
            </Carousel>
        );
        const rightArrow = screen.getByTestId('carousel-right-arrow-icon');
        const element = screen.getByTestId('carousel-scroll');
        expect(rightArrow).toBeDisabled();
        fireEvent.scroll(element, { target: { scrollLeft: -10 } });
        expect(rightArrow).toBeEnabled();
    });
});
