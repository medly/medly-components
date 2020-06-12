import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { ToastContainer } from './ToastContainer.component';
import { addToast } from './ToastStore';
import { Props } from './types';

jest.useFakeTimers();

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

    it('should add toast in the container and raising the addToast event', () => {
        const { getByText, queryByText } = render(<ToastContainer />);
        addToast({ variant: 'success', header: 'Heading 1', message: 'Info message', timer: 2000 });
        expect(getByText('Info message')).toBeInTheDocument();
        jest.runAllTimers();
        // should be removed after 2 second
        expect(queryByText('Info message')).toBeNull();
    });

    it('should remove toast from the container on clicking on close icon', () => {
        const { container, queryByText } = render(<ToastContainer />);
        addToast({ variant: 'success', header: 'Heading 1', message: 'Info message' });
        fireEvent.click(container.querySelectorAll('svg')[1]);
        expect(queryByText('Info message')).toBeNull();
    });

    it('should automatically remove toast in the container after 5 second', () => {
        const { getByText, queryByText } = render(<ToastContainer />);
        addToast({ variant: 'success', header: 'Heading 1', message: 'Info message' });
        expect(getByText('Info message')).toBeInTheDocument();
        jest.runAllTimers();
        // should be removed after 5 second
        expect(queryByText('Info message')).toBeNull();
    });
});
