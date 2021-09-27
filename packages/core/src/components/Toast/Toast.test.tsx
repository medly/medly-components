import { HomeIcon } from '@medly-components/icons';
import { fireEvent, render } from '@test-utils';
import React from 'react';
import { Toast } from './Toast';
import { ToastProps } from './types';

describe('Toast', () => {
    test.each(['error', 'warning', 'success', 'info'])('should render properly with %s variant', variant => {
        const { container } = render(<Toast id={1} variant={variant as ToastProps['variant']} />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with fullWidth prop', () => {
        const { container } = render(<Toast id={1} variant="success" message="Info message" fullWidth />);
        expect(container).toMatchSnapshot();
    });

    it('should render header and message text', () => {
        const { container } = render(<Toast id={1} variant="success" header="Heading 1" message="Info message" />);
        expect(container).toMatchSnapshot();
    });

    it('should render custom icons', () => {
        const { container } = render(<Toast id={1} variant="success" icon={HomeIcon} />);
        expect(container).toMatchSnapshot();
    });

    it('should render action button', () => {
        const mockOnButtonClick = jest.fn(),
            { container, getByRole } = render(
                <Toast id={1} variant="success" action={{ label: 'Action 1', onClick: mockOnButtonClick }} />
            );
        fireEvent.click(getByRole('button', { name: 'Action 1' }));
        expect(mockOnButtonClick).toBeCalled();
        expect(container).toMatchSnapshot();
    });
});
