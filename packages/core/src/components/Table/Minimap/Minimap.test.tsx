import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { Minimap } from './Minimap';

const tableRef = {
    current: {
        scrollWidth: 300,
        offsetWidth: 200,
        scrollLeft: 1,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        getBoundingClientRect: jest.fn().mockImplementation(() => ({
            bottom: 100
        })),
        scroll: jest.fn()
    }
};

const renderMinimap = () => render(<Minimap tableRef={tableRef} />);

describe('Minimap component', () => {
    beforeEach(() => {
        cleanup();
        jest.resetAllMocks();
    });

    it('should render properly', () => {
        const { container } = renderMinimap();
        expect(container).toMatchSnapshot();
    });

    it('should align slider controller with proper left offset when user scrolls over the table', () => {
        let scrollCallback: Function = null;
        tableRef.current.addEventListener = jest.fn().mockImplementation((a, b) => {
            if (a === 'scroll') {
                scrollCallback = b;
            }
        });
        const { container } = renderMinimap();
        const stopPropagationMock = jest.fn();
        const sliderController = container.querySelector('#sliderController');
        scrollCallback({ stopPropagation: stopPropagationMock });
        expect(stopPropagationMock).toHaveBeenCalled();
        expect(sliderController).toHaveStyle('left: 0.8316831683168316px');
        expect(container).toMatchSnapshot();
    });

    it('should not align slider controller when user performs mousedown on slider controller and performs mousemove on window', () => {
        let scrollCallback: Function = null;
        tableRef.current.addEventListener = jest.fn().mockImplementation((a, b) => {
            if (a === 'scroll') {
                scrollCallback = b;
            }
        });
        const { container } = renderMinimap();
        const stopPropagationMock = jest.fn();
        const sliderController = container.querySelector('#sliderController');
        fireEvent.mouseDown(sliderController);
        scrollCallback({ stopPropagation: stopPropagationMock });
        expect(stopPropagationMock).toHaveBeenCalled();
        expect(sliderController).not.toHaveStyle('left: 8.831683168316832px');
        expect(container).toMatchSnapshot();
    });

    it('should position minimap at the right hand side bottom of the table on window resize', () => {
        const { container } = renderMinimap();
        window.dispatchEvent(new Event('resize'));
        expect(container).toMatchSnapshot();
    });

    it('should position minimap at the right hand side bottom of the table on window scroll', () => {
        const { container } = renderMinimap();
        window.dispatchEvent(new Event('scroll'));
        expect(container).toMatchSnapshot();
    });

    it('should stop slider controller positioning when we move cursor out of the window', () => {
        const { container } = renderMinimap();
        jest.spyOn(window, 'removeEventListener');
        document.documentElement.dispatchEvent(new Event('mouseleave'));
        expect(window.removeEventListener).toHaveBeenCalledWith('mousemove', expect.any(Function));
        expect(container).toMatchSnapshot();
    });

    it('should position slider controller when performed drag operation on it', () => {
        const { container } = renderMinimap();
        const sliderController = container.querySelector('#sliderController');
        fireEvent.mouseDown(sliderController);
        fireEvent.mouseMove(sliderController);
        expect(sliderController).toHaveStyle('left: 0px');
        expect(container).toMatchSnapshot();
    });

    it('should position slider controller at the extreme end of the slider content when dragged out of it', () => {
        const { container } = renderMinimap();
        const sliderController = container.querySelector('#sliderController');
        fireEvent.mouseDown(sliderController);
        fireEvent.mouseMove(sliderController, { clientX: 200 });
        expect(sliderController).toHaveStyle('left: 84px');
        expect(container).toMatchSnapshot();
    });

    it('should position slider controller at the correct position when dragged inside slider content', () => {
        const { container } = renderMinimap();
        const sliderController = container.querySelector('#sliderController');
        fireEvent.mouseDown(sliderController);
        fireEvent.mouseMove(sliderController, { clientX: 40 });
        expect(sliderController).toHaveStyle('left: 25px');
        expect(container).toMatchSnapshot();
    });
});
