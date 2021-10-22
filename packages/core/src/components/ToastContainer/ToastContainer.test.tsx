import { removeAllToasts } from '@medly-components/core';
import { cleanup, fireEvent, render, screen } from '@test-utils';
import React from 'react';
import { ToastContainer } from './ToastContainer.component';
import { addToast } from './ToastStore';
import { ToastContainerProps } from './types';

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
    ])('should render properly with position %s', position => {
        const { container } = render(<ToastContainer position={position as ToastContainerProps['position']} />);
        addToast({ variant: 'success', header: 'Heading 1', message: 'Info message', timer: 2000 });
        expect(container).toMatchSnapshot();
        jest.runAllTimers();
    });

    it('should not render toast container if there are no toasts available', () => {
        const { container } = render(<ToastContainer />);
        expect(container.firstChild).toBeNull();
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

    it('should remove all toasts from the container at once', () => {
        render(<ToastContainer />);
        addToast({ variant: 'success', header: 'Heading 1', message: 'Success message', timer: 2000 });
        addToast({ variant: 'error', header: 'Heading 1', message: 'Error message', timer: 2000 });
        addToast({ variant: 'warning', header: 'Heading 1', message: 'Warning message', timer: 2000 });
        setTimeout(() => {
            removeAllToasts();
            expect(screen.queryByText('Success message')).toBeNull();
            expect(screen.queryByText('Error message')).toBeNull();
            expect(screen.queryByText('Warning message')).toBeNull();
        }, 0);
    });
});
