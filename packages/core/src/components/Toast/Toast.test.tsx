import { HomeIcon } from '@medly-components/icons';
import { cleanup, fireEvent, render } from '@test-utils';
import {
    getByText,
  } from '@testing-library/dom'
import React from 'react';
import { Toast } from './Toast';
import { Props } from './types';

describe('Toast', () => {
    afterEach(cleanup);

    test.each(['error', 'warning', 'success', 'info'])('should render properly with %s variant', (variant: Props['variant']) => {
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
        const mockOnButtonClick = jest.fn();
        const { container } = render(<Toast variant="success" action={{ label: 'Action 1', handler: mockOnButtonClick }}></Toast>);
        fireEvent.click(getByText(container, 'Action 1'));
        expect(mockOnButtonClick).toBeCalledWith(1);
        expect(container).toMatchSnapshot();
    });
});
