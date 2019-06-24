import { TestUtils } from '@medly-components/utils';
import 'jest-styled-components';
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
        const { container, getByTestId } = render(
            <PopoverWrapper interactionType="click" placement="left">
                <div>Dummy Div</div>
                <Popover fullWidth fullHeight>
                    Dummy popover
                </Popover>
            </PopoverWrapper>
        );
        expect(container).toMatchSnapshot();
        const wrapper = getByTestId('popover-wrapper');
        fireEvent.click(wrapper);
        expect(container).toMatchSnapshot();
        fireEvent.click(wrapper);
        expect(container).toMatchSnapshot();
    });
});
