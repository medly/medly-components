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
            <Modal.Content>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </Modal.Content>
            <Modal.Actions>Demo Actions</Modal.Actions>
        </Modal>
    );
describe('Modal component', () => {
    const originalScrollHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollHeight');
    const originalClientHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientHeight');
    const originalScrollTop = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTop');

    beforeAll(() => {
        Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 500 });
        Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 500 });
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', { configurable: true, value: 0 });
    });

    afterAll(() => {
        Object.defineProperty(HTMLElement.prototype, 'scrollHeight', originalScrollHeight);
        Object.defineProperty(HTMLElement.prototype, 'clientHeight', originalClientHeight);
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', originalScrollTop);
    });
    afterEach(cleanup);

    it('should render properly when it is open', () => {
        const { container } = renderer({ open: true, minWidth: '200px', minHeight: '200px' });
        expect(container).toMatchSnapshot();
    });

    it('should not render when open prop is falsy', () => {
        const { container } = renderer({});
        expect(container).toBeEmptyDOMElement();
    });

    it('should call onCloseModal on click on close icon', () => {
        const mockOnCloseModal = jest.fn();
        const { container } = renderer({ open: true, onCloseModal: mockOnCloseModal });
        fireEvent.click(container.querySelector('#medly-modal-close-button'));
        expect(mockOnCloseModal).toBeCalled();
    });

    it('should call onCloseModal on pressing escape key', () => {
        const mockOnCloseModal = jest.fn();
        const { container } = renderer({ open: true, onCloseModal: mockOnCloseModal });
        fireEvent.keyDown(container, { key: 'Escape', code: 27 });
        expect(mockOnCloseModal).toBeCalled();
    });

    it('should be able to render any JSX element in header', () => {
        const mockOnCloseModal = jest.fn();
        const { container } = render(
            <Modal open onCloseModal={mockOnCloseModal}>
                <Modal.Header>Demo Header</Modal.Header>
                <Modal.Content>Demo Content</Modal.Content>
                <Modal.Actions>
                    <p>Demo Header</p>
                </Modal.Actions>
            </Modal>
        );
        expect(container.querySelector('p')).toBeInTheDocument();
    });

    it('should hide shadow of header on scroll to top', () => {
        const { container } = renderer({ open: true });
        Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 800 });
        Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 500 });
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', { configurable: true, value: 0 });
        fireEvent.scroll(container.querySelector('#medly-modal-content'), { target: { scrollY: 0 } });
        expect(container.querySelector('#medly-modal-header')).not.toHaveStyle(`box-shadow: 0 1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`);
        expect(container.querySelector('#medly-modal-actions')).toHaveStyle(`box-shadow: 0 -1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`);
    });
    it('should hide shadow of actions on scroll to bottom', () => {
        const { container } = renderer({ open: true });
        Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 800 });
        Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 500 });
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', { configurable: true, value: 300 });
        fireEvent.scroll(container.querySelector('#medly-modal-content'), { target: { scrollY: 300 } });
        expect(container.querySelector('#medly-modal-header')).toHaveStyle(`box-shadow: 0 1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`);
        expect(container.querySelector('#medly-modal-actions')).not.toHaveStyle(
            `box-shadow: 0 -1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`
        );
    });

    it('should show shadow of header and actions on scroll', () => {
        const { container } = renderer({ open: true });
        Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 800 });
        Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 500 });
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', { configurable: true, value: 100 });
        fireEvent.scroll(container.querySelector('#medly-modal-content'), { target: { scrollY: 100 } });
        expect(container.querySelector('#medly-modal-header')).toHaveStyle(`box-shadow: 0 1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`);
        expect(container.querySelector('#medly-modal-actions')).toHaveStyle(`box-shadow: 0 -1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`);
    });
});
