import { fireEvent, render, screen } from '@test-utils';
import React, { useContext } from 'react';
import Header from './Header';

describe('Header', () => {
    function getHamburgerIcon(): HTMLElement {
        return screen.queryByTestId('hamburger-icon');
    }

    it('renders a hamburger icon', () => {
        render(<Header />);

        expect(screen.getByTestId('hamburger-icon')).toBeInTheDocument();
    });

    it('hides the hamburger icon when rendered without the nav', () => {
        render(<Header withNav={false} />);

        expect(getHamburgerIcon()).not.toBeInTheDocument();
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

            fireEvent.click(getHamburgerIcon());

            expect(screen.queryByText('Close')).toBeInTheDocument();
        });

        it('hides the nav on click of the close button', () => {
            renderHeaderWithNav();

            fireEvent.click(getHamburgerIcon());
            fireEvent.click(screen.queryByText('Close'));

            expect(screen.queryByText('Close')).not.toBeInTheDocument();
        });
    });
});
