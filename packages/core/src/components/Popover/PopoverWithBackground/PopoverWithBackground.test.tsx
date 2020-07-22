import { cleanup, render } from '@test-utils';
import React from 'react';
import { Placement } from '../PopoverWrapper/types';
import { PopoverWithBackground } from './PopoverWithBackground';
import { Props } from './types';

const renderer = ({ placement = 'left' }: Props) =>
    render(
        <PopoverWithBackground placement={placement} fullWidth={true} fullHeight={true}>
            Dummy popover
        </PopoverWithBackground>
    );

describe('Popover with background component', () => {
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
        const { container } = renderer({ placement });
        expect(container).toMatchSnapshot();
    });
});
