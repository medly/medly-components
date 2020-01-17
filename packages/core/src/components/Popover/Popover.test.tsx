import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Popover from './Popover';
import PopoverWrapper from './PopoverWrapper';
import { Placement, Props } from './PopoverWrapper/types';

const { render, fireEvent, cleanup } = TestUtils;

const renderer = ({ interactionType = 'hover', showPopover = false, placement = 'left', onOuterClick = jest.fn() }: Props) =>
    render(
        <PopoverWrapper {...{ interactionType, showPopover, placement, onOuterClick }}>
            <div>Dummy Div</div>
            <Popover>Dummy popover</Popover>
        </PopoverWrapper>
    );

describe('Popover component', () => {
    afterEach(cleanup);

    describe('with placement', () => {
        afterEach(cleanup);

        test.each([
            'top-start',
            'top',
            'top-end',
            'right-start',
            'right',
            'right-end',
            'bottom-end',
            'bottom',
            'bottom-start',
            'left-end',
            'left',
            'left-start'
        ])('%s, should render properly', (placement: Placement) => {
            const { container, getByTestId } = renderer({ placement });
            fireEvent.mouseOver(getByTestId('medly-popover-wrapper'));
            expect(container).toMatchSnapshot();
        });
    });

    it('should not render popover when interaction type is hover and user clicks on it', () => {
        const { getByTestId } = renderer({ interactionType: 'hover' });
        const wrapper = getByTestId('medly-popover-wrapper'),
            popover = getByTestId('medly-popover');
        fireEvent.click(wrapper);
        expect(popover).not.toBeVisible();
    });

    it('should render popover when interaction type is click and showPopover prop is given', () => {
        const { getByTestId } = renderer({ interactionType: 'click', showPopover: true });
        expect(getByTestId('medly-popover')).toBeVisible();
    });

    it('should not render popover when interaction type is click and showPopover prop is false', () => {
        const { getByTestId } = renderer({ interactionType: 'click', showPopover: false });
        expect(getByTestId('medly-popover')).not.toBeVisible();
    });

    it('should call onOuterClick fn on click on outside', () => {
        const mockOnOuterClick = jest.fn();
        const { getByTestId } = render(
            <div>
                <div data-testid="sibling">Sibling</div>
                <PopoverWrapper interactionType="click" onOuterClick={mockOnOuterClick}>
                    <div>Dummy Div</div>
                    <Popover>Dummy popover</Popover>
                </PopoverWrapper>
            </div>
        );
        fireEvent.click(getByTestId('sibling'));
        expect(mockOnOuterClick).toBeCalled();
    });

    it('should render popover with full width and height if fullWidth and fullHeight are given', () => {
        const { getByTestId } = render(
            <PopoverWrapper interactionType="click" showPopover>
                <div>Dummy Div</div>
                <Popover fullWidth fullHeight>
                    Dummy popover
                </Popover>
            </PopoverWrapper>
        );
        expect(getByTestId('medly-popover')).toHaveStyle(`
            width: calc(100% - 0px);
            height: calc(100% - 0px);
      `);
    });
});
