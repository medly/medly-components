import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { Modal } from './Modal';

const renderer = ({
    open = false,
    onCloseModal = jest.fn(),
    minWidth,
    minHeight
}: {
    minWidth?: string;
    minHeight?: string;
    open?: boolean;
    onCloseModal?: () => void;
}) =>
    render(
        <Modal {...{ open, onCloseModal, minHeight, minWidth }}>
            <Modal.Header>
                <p>Demo Header</p>
            </Modal.Header>
            <Modal.Content>Demo Content</Modal.Content>
            <Modal.Actions>Demo Actions</Modal.Actions>
        </Modal>
    );
describe('Modal component', () => {
    afterEach(cleanup);

    it('should render properly when it is open', () => {
        const { container } = renderer({ open: true, minWidth: '200px', minHeight: '200px' });
        expect(container).toMatchSnapshot();
    });

    it('should not render when open prop is falsy', () => {
        const { container } = renderer({});
        expect(container).toMatchSnapshot();
    });

    it('should call onCloseModal on click on close icon', () => {
        const mockOnCloseModal = jest.fn();
        const { container } = renderer({ open: true, onCloseModal: mockOnCloseModal });
        fireEvent.click(container.querySelector('#medly-modal-close-button'));
        expect(mockOnCloseModal).toBeCalled();
    });

    it('should call onCloseModal on pressing escape key', () => {
        const events: { [k: string]: any } = {};
        document.addEventListener = jest.fn((event, cb) => {
            events[event] = cb;
        });
        const mockOnCloseModal = jest.fn(),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            component = render(
                <Modal open onCloseModal={mockOnCloseModal}>
                    <Modal.Header>Demo Header</Modal.Header>
                    <Modal.Content>Demo Content</Modal.Content>
                    <Modal.Actions>Demo Actions</Modal.Actions>
                </Modal>
            );
        events.keydown({ keyCode: 27 });
        expect(mockOnCloseModal).toBeCalled();
    });
});
