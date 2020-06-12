import { HomeIcon } from '@medly-components/icons';
import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { Toast } from './Toast';
import { ToastProps } from './types';

describe('Toast', () => {
    afterEach(cleanup);

    test.each(['error', 'warning', 'success', 'info'])('should render properly with %s variant', (variant: ToastProps['variant']) => {
        const { container } = render(<Toast variant={variant} />);
        expect(container).toMatchSnapshot();
    });

    it('should render header and message text', () => {
        const { container } = render(<Toast variant="success" header="Heading 1" message="Info message"></Toast>);
        expect(container).toMatchSnapshot();
    });

    it('should render custom icons', () => {
        const { container } = render(<Toast variant="success" icon={HomeIcon}></Toast>);
        expect(container).toMatchSnapshot();
    });

    it('should render action button', () => {
        const mockOnButtonClick = jest.fn(),
            { container, getByRole } = render(<Toast variant="success" action={{ label: 'Action 1', onClick: mockOnButtonClick }}></Toast>);
        fireEvent.click(getByRole('button', { name: 'Action 1' }));
        expect(mockOnButtonClick).toBeCalled();
        expect(container).toMatchSnapshot();
    });
});
