import { fireEvent, render, screen } from '@test-utils';
import { DialogBox } from './DialogBox';
import { DialogBoxProps } from './types';

const dialogBoxRenderer = ({
    open = false,
    onClose = jest.fn(),
    minWidth,
    minHeight,
    shouldCloseOnOutsideClick = false,
    showCloseIcon = false
}: DialogBoxProps) =>
    render(
        <DialogBox {...{ open, onClose, minHeight, minWidth, shouldCloseOnOutsideClick, showCloseIcon }}>
            <DialogBox.Header>
                <p>Demo Header</p>
            </DialogBox.Header>
            <DialogBox.Content>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </DialogBox.Content>
            <DialogBox.Actions>Demo Actions</DialogBox.Actions>
        </DialogBox>
    );

describe('DialogBox component', () => {
    it('should render properly when it is open', () => {
        const { container } = dialogBoxRenderer({ open: true, minWidth: '200px', minHeight: '200px' });
        expect(container).toMatchSnapshot();
    });

    it('should render properly with close icon when it is open', () => {
        const { container } = dialogBoxRenderer({ open: true, minWidth: '200px', minHeight: '200px', showCloseIcon: true });
        expect(container).toMatchSnapshot();
    });

    it('should not render when open prop is falsy', () => {
        const { container } = dialogBoxRenderer({});
        expect(container).toBeEmptyDOMElement();
    });

    it('should call onClose on pressing escape key', () => {
        const mockOnClose = jest.fn();
        const { container } = dialogBoxRenderer({ open: true, onClose: mockOnClose });
        fireEvent.keyDown(container, { key: 'Escape', code: 27 });
        expect(mockOnClose).toBeCalled();
    });

    it('should call onClose on click on overlay background', () => {
        const mockOnClose = jest.fn();
        const { container } = dialogBoxRenderer({ open: true, onClose: mockOnClose, shouldCloseOnOutsideClick: true });
        fireEvent.click(container.querySelector('#medly-dialog-box') as HTMLDivElement);
        expect(mockOnClose).toBeCalled();
    });

    it('should be able to render any JSX element in header', () => {
        const mockOnClose = jest.fn();
        const { container } = render(
            <DialogBox open onClose={mockOnClose}>
                <DialogBox.Header>Demo Header</DialogBox.Header>
                <DialogBox.Content>Demo Content</DialogBox.Content>
                <DialogBox.Actions>
                    <p>Demo Header</p>
                </DialogBox.Actions>
            </DialogBox>
        );
        expect(container.querySelector('p')).toBeInTheDocument();
    });

    it('should call onClose on click on close icon', () => {
        const mockOnClose = jest.fn();
        dialogBoxRenderer({ open: true, onClose: mockOnClose, shouldCloseOnOutsideClick: true, showCloseIcon: true });
        fireEvent.click(screen.getByTestId('medly-dialog-box-close-button') as HTMLElement);
        expect(mockOnClose).toBeCalled();
    });
});
