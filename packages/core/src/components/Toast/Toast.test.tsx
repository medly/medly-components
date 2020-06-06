import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { Toast } from './Toast';
import { Props } from './types';

describe('Toast', () => {
    afterEach(cleanup);

    test.each(['error', 'warning', 'success', 'info'])('should render properly with %s variant', (variant: Props['variant']) => {
        const { container } = render(<Toast variant={variant}></Toast>);
        expect(container).toMatchSnapshot();
    });

    it('should render header text', () => {
        const { container } = render(<Toast variant="success" header="Heading 1"></Toast>);
        expect(container).toMatchSnapshot();
    });

    it('should render message text', () => {
        const { container } = render(<Toast variant="success" message="Info message"></Toast>);
        expect(container).toMatchSnapshot();
    });

    it('should render header and message text', () => {
        const { container } = render(<Toast variant="success" header="Heading 1" message="Info message"></Toast>);
        expect(container).toMatchSnapshot();
    });

    it('should close toast when close icon is clicked', () => {
        const { container } = render(<Toast variant="success" header="Heading 1" message="Info message" />);
        fireEvent.click(container.querySelectorAll('svg')[1], 2);
        expect(container).toMatchSnapshot();
    });
});
