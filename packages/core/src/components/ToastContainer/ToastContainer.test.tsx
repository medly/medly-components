import { cleanup, render } from '@test-utils';
import React from 'react';
import { ToastContainer } from './ToastContainer.component';
import { Props } from './types';

describe('ToastContainer', () => {
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
    ])('should render properly with position %s', (position: Props['position']) => {
        const { container } = render(<ToastContainer position={position}></ToastContainer>);
        expect(container).toMatchSnapshot();
    });
});
