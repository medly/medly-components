import { Text } from '@medly-components/core';
import { DateRangeIcon, HomeIcon, SearchIcon, SettingsIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { cleanup, fireEvent, render, screen } from '@test-utils';
import { SideNav } from './SideNav';

const renderer = (active: string, mockOnChange = jest.fn(), hideShadow = false) =>
    render(
        <SideNav active={active} onChange={mockOnChange} hideShadow={hideShadow}>
            <SideNav.List>
                <SideNav.Nav path="/home">
                    <HomeIcon />
                    <Text>Home</Text>
                </SideNav.Nav>
                <SideNav.Nav path="/search">
                    <SearchIcon />
                    <Text>Search</Text>
                </SideNav.Nav>
                <SideNav.Group title="Group">
                    <SideNav.Nav path="/transactions">
                        <DateRangeIcon size="S" />
                        <Text>Transactions</Text>
                    </SideNav.Nav>
                    <SideNav.Nav path="/settings">
                        <SettingsIcon size="S" />
                        <Text>Settings</Text>
                    </SideNav.Nav>
                </SideNav.Group>
            </SideNav.List>
        </SideNav>
    );

describe('SideNav', () => {
    afterEach(cleanup);

    it('should render properly with shadow', () => {
        const { container } = renderer('/home');
        expect(container).toMatchSnapshot();
    });

    it('should open by default on 1025+ screen sizes', () => {
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1240 });
        const { container } = renderer('/home');
        expect(container.querySelector('aside')).toHaveStyle(`
            width: 25.6rem;
        `);
    });

    it('should be closed by default on 0 to 1024 screen sizes', () => {
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 720 });
        const { container } = renderer('/home');
        expect(container.querySelector('aside')).toHaveStyle(`
            width: 7.2rem;
        `);
    });

    it('should render properly without shadow', () => {
        const { container } = renderer('/home', jest.fn(), true);
        expect(container).toMatchSnapshot();
    });

    it('should expand aside on clicking on the expand icon', () => {
        const { container } = renderer('/home');
        fireEvent.click(screen.getByTitle('medly-sidenav-toggle-expand'));
        expect(container.querySelector('aside')).toHaveStyle(`
           width: ${defaultTheme.sideNav.openSize};
        `);
    });

    it('should collapse aside on clicking on the hide icon', () => {
        const { container } = renderer('/home');
        fireEvent.click(screen.getByTitle('medly-sidenav-toggle-expand'));
        fireEvent.click(screen.getByTitle('medly-sidenav-toggle-hide'));
        expect(container.querySelector('aside')).toHaveStyle(`
           width: ${defaultTheme.sideNav.closeSize};
        `);
    });

    it('should expand nav on hovering on it', () => {
        renderer('/home');
        fireEvent.mouseEnter(screen.getByRole('navigation'));
        expect(screen.getByRole('navigation')).toHaveStyle(`
            width: ${defaultTheme.sideNav.openSize};
        `);
    });

    it('should collapse nav on moving cursor out of it', () => {
        renderer('/home');
        fireEvent.mouseEnter(screen.getByRole('navigation'));
        fireEvent.mouseLeave(screen.getByRole('navigation'));
        expect(screen.getByRole('navigation')).toHaveStyle(`
            width: ${defaultTheme.sideNav.closeSize};
        `);
    });

    it('should call onChange with expected path when it is used as controlled component', () => {
        const mockOnChange = jest.fn();
        renderer('/home', mockOnChange);
        fireEvent.click(screen.getByTitle('medly-sidenav-toggle-expand'));
        fireEvent.click(screen.getByText('Search'));
        expect(mockOnChange).toBeCalledWith('/search');
    });

    it('should call onChange with expected path when it is used as uncontrolled component', () => {
        const mockOnChange = jest.fn();
        renderer('', mockOnChange);
        fireEvent.click(screen.getByTitle('medly-sidenav-toggle-expand'));
        fireEvent.click(screen.getByText('Search'));
        expect(mockOnChange).toBeCalledWith('/search');
    });
});
