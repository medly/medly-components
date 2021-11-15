import { fireEvent, render, screen } from '@test-utils';
import Header from '../Header';
import Nav from './Nav';

const DummyContent = () => <span>Content</span>;

describe('Nav', () => {
    const renderNavWithContext = (isOpen = false, onClose = jest.fn()) =>
        render(
            <Header.Context.Provider value={{ isOpen, onClose }}>
                <Nav>
                    <DummyContent />
                </Nav>
            </Header.Context.Provider>
        );

    it('renders any passed children', () => {
        renderNavWithContext();

        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('displays a bg overlay when the nav is open', () => {
        renderNavWithContext(true);

        const overlay = screen.getByTestId('overlay');
        expect(overlay).toHaveStyle('opacity: 0.5');
        expect(overlay).toHaveStyle('z-index: 1000');
    });

    it('hides the bg overlay when the nav is closed', () => {
        renderNavWithContext(false);

        const overlay = screen.getByTestId('overlay');
        expect(overlay).toHaveStyle('opacity: 0');
        expect(overlay).toHaveStyle('z-index: -100');
    });

    it('closes the nav on clicking the overlay', () => {
        const onClose = jest.fn();
        renderNavWithContext(true, onClose);

        fireEvent.click(screen.getByTestId('overlay'));
        expect(onClose).toHaveBeenCalled();
    });

    it('displays the contents when the nav is open', () => {
        renderNavWithContext(true);

        const contents = screen.getByTestId('container');

        expect(contents).toHaveStyle('left: 0');
    });

    it('hides the contents when the nav is closed', () => {
        renderNavWithContext(false);

        const contents = screen.getByTestId('container');

        expect(contents).toHaveStyle('left: -320px');
    });

    it('closes the nav on clicking the close icon', () => {
        const onClose = jest.fn();
        renderNavWithContext(true, onClose);

        fireEvent.click(screen.getByTestId('closeIcon'));
        expect(onClose).toHaveBeenCalled();
    });
});
