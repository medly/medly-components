import { cleanup, render } from '@test-utils';
import React from 'react';
import SliderController from '.';

const renderSliderController = () => render(<SliderController controllerWidth={30} />);

describe('Minimap Slider Controller', () => {
    beforeEach(() => {
        cleanup();
    });

    it('should render properly', () => {
        const { container } = renderSliderController();
        expect(container).toMatchSnapshot();
    });
});
