import { TestUtils } from '@medly-components/utils';
import React from 'react';
import { Modal } from './Modal';

describe('Modal component', () => {
    const onCloseHandler = jest.fn();

    it('should render properly when it is open', () => {
        const { container } = TestUtils.render(
            <Modal open onCloseModal={onCloseHandler}>
                <Modal.Header>
                    <p>Demo Header</p>
                </Modal.Header>
                <Modal.Content>Demo Content</Modal.Content>
                <Modal.Actions>Demo Actions</Modal.Actions>
            </Modal>
        );
        expect(container).toMatchSnapshot();
    });

    it('should not render when open prop is falsy', () => {
        const { container } = TestUtils.render(
            <Modal onCloseModal={onCloseHandler}>
                <Modal.Header>
                    <h1>Demo Header</h1>
                </Modal.Header>
                <Modal.Content>Demo Content</Modal.Content>
                <Modal.Actions>Demo Actions</Modal.Actions>
            </Modal>
        );
        expect(container).toMatchSnapshot();
    });

    it('should call onCloseHandler', () => {
        const { container, getByTestId } = TestUtils.render(
            <Modal open onCloseModal={onCloseHandler}>
                <Modal.Header>Add User</Modal.Header>
                <Modal.Content>Demo Content</Modal.Content>
                <Modal.Actions>Demo Actions</Modal.Actions>
            </Modal>
        );
        TestUtils.fireEvent.click(getByTestId('modal-close-button'));
        expect(onCloseHandler).toBeCalled();
    });
});
