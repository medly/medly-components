import { TestUtils } from '@medly-components/utils';
import React from 'react';
import { Popover, PopoverWrapper } from './Popover';

const { render, fireEvent, cleanup } = TestUtils;
afterEach(cleanup);

describe('Popover component', () => {
    it('should render properly when interction type is hover', () => {
        const { container, getByTestId } = render(
            <PopoverWrapper interactionType="hover" placement="right">
                <div>Dummy Div</div>
                <Popover>Dummy popover</Popover>
            </PopoverWrapper>
        );
        expect(container).toMatchSnapshot();
        const wrapper = getByTestId('popover-wrapper');
        fireEvent.click(wrapper);
        expect(container).toMatchSnapshot();
    });

    it('should not render popover when interction type is hover and user click on it', () => {
        const { container, getByTestId } = render(
            <PopoverWrapper interactionType="hover" placement="top">
                <div>Dummy Div</div>
                <Popover>Dummy popover</Popover>
            </PopoverWrapper>
        );
        const wrapper = getByTestId('popover-wrapper');
        fireEvent.click(wrapper);
        expect(container).toMatchSnapshot();
    });

    it('should render properly when interction type is click', () => {
        const mockOnOuterCick = jest.fn();
        const { container, getByTestId } = render(
            <div>
                <div data-testid="sibling">Sibling div</div>
                <PopoverWrapper interactionType="click" placement="left" onOuterClick={mockOnOuterCick}>
                    <div>Dummy Div</div>
                    <Popover fullWidth fullHeight>
                        Dummy popover
                    </Popover>
                </PopoverWrapper>
            </div>
        );
        expect(container).toMatchSnapshot();
        const wrapper = getByTestId('popover-wrapper'),
            sibling = getByTestId('sibling');
        // Open Popover
        fireEvent.click(wrapper);
        expect(container).toMatchSnapshot();
        // Close Popover
        fireEvent.click(wrapper);
        expect(container).toMatchSnapshot();

        // Open Popover and then close it by clicking sibling
        fireEvent.click(wrapper);
        fireEvent.click(sibling);
        expect(container).toMatchSnapshot();
        expect(mockOnOuterCick).toHaveBeenCalled();
    });
});
