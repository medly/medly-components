import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Popover from './Popover';
import PopoverWrapper from './PopoverWrapper';
import { Placement, Props } from './PopoverWrapper/types';

const { render, fireEvent, cleanup } = TestUtils;

const renderer = ({ showPopover = false, placement = 'left', onOuterClick = jest.fn() }: Props) =>
    render(
        <PopoverWrapper {...{ showPopover, placement, onOuterClick }}>
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
            const { container } = renderer({ placement, showPopover: true });
            fireEvent.mouseOver(container.querySelector('#medly-popover-wrapper'));
            expect(container).toMatchSnapshot();
        });
    });

    it('should render popover when showPopover is given', () => {
        const { container } = renderer({ showPopover: true });
        expect(container.querySelector('#medly-popover')).toBeVisible();
    });

    it('should not render popover when showPopover is not given', () => {
        const { container } = renderer({});
        expect(container.querySelector('#medly-popover')).toBeNull();
    });

    it('should call onOuterClick fn on click on outside', () => {
        const mockOnOuterClick = jest.fn();
        const { container } = render(
            <div>
                <div id="sibling">Sibling</div>
                <PopoverWrapper onOuterClick={mockOnOuterClick}>
                    <div>Dummy Div</div>
                    <Popover>Dummy popover</Popover>
                </PopoverWrapper>
            </div>
        );
        fireEvent.click(container.querySelector('#sibling'));
        expect(mockOnOuterClick).toBeCalled();
    });

    it('should render popover with full width and height if fullWidth and fullHeight are given', () => {
        const { container } = render(
            <PopoverWrapper showPopover>
                <div>Dummy Div</div>
                <Popover fullWidth fullHeight>
                    Dummy popover
                </Popover>
            </PopoverWrapper>
        );
        expect(container.querySelector('#medly-popover')).toHaveStyle(`
            width: calc(100% - 0px);
            height: calc(100% - 0px);
      `);
    });
});
