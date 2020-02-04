import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { Toast } from './Toast';
import { Props } from './types';

describe('Toast', () => {
    afterEach(cleanup);

    test.each(['error', 'warning', 'success', 'info'])('should render properly with %s variant', (variant: Props['variant']) => {
        const { container } = render(<Toast variant={variant}>Hello</Toast>);
        expect(container).toMatchSnapshot();
    });

    it('should render properly if child jsx', () => {
        const { container } = render(
            <Toast variant="success">
                <p>Hello</p>
            </Toast>
        );
        expect(container).toMatchSnapshot();
    });

    it('should call on Close when click on the clear icon', () => {
        const mockOnClose = jest.fn();
        const { container } = render(
            <Toast variant="success" onClose={mockOnClose}>
                Hello
            </Toast>
        );
        fireEvent.click(container.querySelectorAll('svg')[1]);
        expect(mockOnClose).toBeCalled();
    });
});
