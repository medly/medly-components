import { cleanup, fireEvent, render, screen } from '@test-utils';
import { Modal } from './Modal';
import { ModalBackgroundStyled } from './Modal.styled';
import { ModalBackgroundProps, ModalProps } from './types';

const modalRenderer = ({
    open = false,
    onCloseModal = jest.fn(),
    minWidth,
    minHeight,
    shouldCloseOnOutsideClick = false,
    disableEscapeKeyDown = false
}: ModalProps) =>
    render(
        <Modal {...{ open, onCloseModal, minHeight, minWidth, shouldCloseOnOutsideClick, disableEscapeKeyDown }}>
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
    const originalScrollHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollHeight')!,
        originalClientHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientHeight')!,
        originalScrollTop = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTop')!;

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
        const { container } = modalRenderer({ open: true, minWidth: '200px', minHeight: '200px' });
        expect(container).toMatchSnapshot();
        expect(document.body).toHaveStyle({ overflow: 'hidden' });
    });

    it('should not render when open prop is falsy', () => {
        const { container } = modalRenderer({});
        expect(container).toBeEmptyDOMElement();
        expect(document.body).toHaveStyle({ overflow: 'unset' });
    });

    it('should call onCloseModal on click on close icon', () => {
        const mockOnCloseModal = jest.fn();
        modalRenderer({ open: true, onCloseModal: mockOnCloseModal });
        fireEvent.click(screen.getByTitle('medly-modal-close-icon'));
        expect(mockOnCloseModal).toBeCalled();
    });

    it('should not call onCloseModal on pressing escape key when disableEscapeKeyDown prop is passed', () => {
        const mockOnCloseModal = jest.fn(),
            { container } = modalRenderer({ open: true, onCloseModal: mockOnCloseModal, disableEscapeKeyDown: true }),
            popup = container.querySelector('#medly-modal-popup') as HTMLDivElement;
        fireEvent.keyDown(popup, { key: 'Escape', code: 27 });
        expect(mockOnCloseModal).not.toBeCalled();
    });

    it('should call onCloseModal on pressing escape key', () => {
        const mockOnCloseModal = jest.fn(),
            { container } = modalRenderer({ open: true, onCloseModal: mockOnCloseModal }),
            popup = container.querySelector('#medly-modal-popup') as HTMLDivElement;
        fireEvent.keyDown(popup, { key: 'Escape', code: 27 });
        expect(mockOnCloseModal).toBeCalled();
    });

    it('should call onCloseModal on click on overlay background', () => {
        const mockOnCloseModal = jest.fn();
        const { container } = modalRenderer({ open: true, onCloseModal: mockOnCloseModal, shouldCloseOnOutsideClick: true });
        fireEvent.click(container.querySelector('#medly-modal') as HTMLDivElement);
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
        const { container } = modalRenderer({ open: true });
        Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 800 });
        Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 500 });
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', { configurable: true, value: 0 });
        fireEvent.scroll(container.querySelector('#medly-modal-content') as HTMLDivElement, { target: { scrollY: 0 } });
        expect(container.querySelector('#medly-modal-header')).not.toHaveStyle(`box-shadow: 0 1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`);
        expect(container.querySelector('#medly-modal-actions')).toHaveStyle(`box-shadow: 0 -1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`);
    });

    it('should hide shadow of actions on scroll to bottom', () => {
        const { container } = modalRenderer({ open: true });
        Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 800 });
        Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 500 });
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', { configurable: true, value: 800 });
        fireEvent.scroll(container.querySelector('#medly-modal-content') as HTMLDivElement, { target: { scrollY: 800 } });
        expect(container.querySelector('#medly-modal-header')).toHaveStyle(`box-shadow: 0 1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`);
        expect(container.querySelector('#medly-modal-actions')).not.toHaveStyle(
            `box-shadow: 0 -1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`
        );
    });

    it('should show shadow of header and actions on scroll', () => {
        const { container } = modalRenderer({ open: true });
        Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 800 });
        Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 500 });
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', { configurable: true, value: 100 });
        fireEvent.scroll(container.querySelector('#medly-modal-content') as HTMLDivElement, { target: { scrollY: 100 } });
        expect(container.querySelector('#medly-modal-header')).toHaveStyle(`box-shadow: 0 1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`);
        expect(container.querySelector('#medly-modal-actions')).toHaveStyle(`box-shadow: 0 -1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`);
    });
});

const ModalBackgroundRenderer = ({ open = true, isSmallScreen = true }: ModalBackgroundProps) => {
    const mockOnClick = jest.fn();
    return render(<ModalBackgroundStyled onClick={mockOnClick} {...{ open, isSmallScreen }} />);
};

describe('Modal component background at small screen size', () => {
    it('should render properly when it is open', () => {
        const { container } = ModalBackgroundRenderer({ open: true, isSmallScreen: true });
        expect(container).toMatchSnapshot();
    });

    it('should render properly when it is closed', () => {
        const { container } = ModalBackgroundRenderer({ open: false, isSmallScreen: true });
        expect(container).toMatchSnapshot();
    });
});
