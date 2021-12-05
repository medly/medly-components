import { fireEvent, render, screen } from '@test-utils';
import { useContext } from 'react';
import Header from './Header';

describe('Header', () => {
    it('renders a hamburger icon', () => {
        render(<Header />);
        expect(screen.getByTestId('hamburger-icon')).toBeInTheDocument();
    });

    it('hides the hamburger icon when rendered without the nav', () => {
        render(<Header withNav={false} />);
        expect(screen.queryByTestId('hamburger-icon')).not.toBeInTheDocument();
    });

    describe('navigation context', () => {
        const DummyNav = () => {
            const { isOpen, onClose } = useContext(Header.Context);
            if (!isOpen) {
                return null;
            }
            return <span onClick={onClose}>Close</span>;
        };

        function renderHeaderWithNav() {
            render(
                <Header>
                    <DummyNav />
                </Header>
            );
        }

        it('hides the nav in its initial state', () => {
            renderHeaderWithNav();
            expect(screen.queryByText('Close')).not.toBeInTheDocument();
        });

        it('shows the nav on click of the hamburger icon', () => {
            renderHeaderWithNav();
            fireEvent.click(screen.getByTestId('hamburger-icon'));
            expect(screen.queryByText('Close')).toBeInTheDocument();
        });

        it('hides the nav on click of the close button', () => {
            renderHeaderWithNav();
            fireEvent.click(screen.getByTestId('hamburger-icon'));
            fireEvent.click(screen.getByText('Close'));
            expect(screen.queryByText('Close')).not.toBeInTheDocument();
        });
    });
});
