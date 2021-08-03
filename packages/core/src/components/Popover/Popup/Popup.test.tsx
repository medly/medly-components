import { cleanup, render } from '@test-utils';
import React from 'react';
import { PopoverContext } from '../Popover.context';
import { Placement } from '../types';
import { Popup } from './Popup';
import { PopoverPopupProps } from './types';

const renderer = (props: PopoverPopupProps) =>
    render(
        <PopoverContext.Provider value={[true, () => null]}>
            <Popup {...props}>Dummy popover</Popup>
        </PopoverContext.Provider>
    );

describe('Popover component', () => {
    afterEach(cleanup);

    describe.each(['with arrow', 'without arrow'])('%s', str => {
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
        ])('and placement %s, should render properly', (placement: Placement) => {
            const { container } = renderer({ placement, withArrow: str === 'with arrow' });
            expect(container).toMatchSnapshot();
        });
    });

    it('should render popover with full width and height if fullWidth and fullHeight are given', () => {
        const { container } = renderer({ fullHeight: true, fullWidth: true });
        expect(container.querySelector('#medly-popover-popup')).toHaveStyle(`
            width: calc(100% - 0px);
            height: calc(100% - 0px);
      `);
    });
});
