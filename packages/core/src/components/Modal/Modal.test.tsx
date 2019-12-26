import { TestUtils } from '@medly-components/utils';
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
    TestUtils.render(
        <Modal {...{ open, onCloseModal, minHeight, minWidth }}>
            <Modal.Header>
                <p>Demo Header</p>
            </Modal.Header>
            <Modal.Content>Demo Content</Modal.Content>
            <Modal.Actions>Demo Actions</Modal.Actions>
        </Modal>
    );
describe('Modal component', () => {
    afterEach(TestUtils.cleanup);

    it('should render properly when it is open', () => {
        const { container } = renderer({ open: true, minWidth: '200px', minHeight: '200px' });
        expect(container).toMatchSnapshot();
    });

    it('should not render when open prop is falsy', () => {
        const { container } = renderer({});
        expect(container).toMatchSnapshot();
    });

    it('should call onCloseModal', () => {
        const mockOnCloseModal = jest.fn();
        const { container, getByTestId } = TestUtils.render(
            <Modal open onCloseModal={mockOnCloseModal}>
                <Modal.Header>Demo Header</Modal.Header>
                <Modal.Content>Demo Content</Modal.Content>
                <Modal.Actions>Demo Actions</Modal.Actions>
            </Modal>
        );
        expect(container).toMatchSnapshot();
        TestUtils.fireEvent.click(getByTestId('modal-close-button'));
        expect(mockOnCloseModal).toBeCalled();
    });
});
