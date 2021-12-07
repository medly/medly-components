import { Text } from '@medly-components/core';
import { HomeIcon, SearchIcon } from '@medly-components/icons';
import { cleanup, fireEvent, render, screen } from '@test-utils';
import { SideNav } from '../SideNav';

const renderer = (active: string, mockOnClick = jest.fn()) =>
    render(
        <SideNav active={active} onChange={mockOnClick}>
            <SideNav.List>
                <SideNav.Nav to="/home">
                    <HomeIcon />
                    <Text>Home</Text>
                </SideNav.Nav>
                <SideNav.Nav to="/search">
                    <SearchIcon />
                    <Text>Search</Text>
                </SideNav.Nav>
            </SideNav.List>
        </SideNav>
    );

describe('NavItem', () => {
    afterEach(cleanup);

    it('should render properly when it is in default state', () => {
        renderer('/home');
        fireEvent.mouseOver(screen.getByText('Search'));
        expect(screen.getByText('Search')).toMatchSnapshot();
    });

    it('should render properly when it is in active state', () => {
        renderer('/home');
        expect(screen.getByText('Home')).toMatchSnapshot();
    });

    it('should render properly when it is in hovered state', () => {
        renderer('/home');
        fireEvent.mouseOver(screen.getByText('Search'));
        expect(screen.getByText('Search')).toMatchSnapshot();
    });

    it('should call onChange with expected data', () => {
        const mockOnChange = jest.fn();
        renderer('', mockOnChange);
        fireEvent.click(screen.getByTitle('medly-sidenav-toggle-expand'));
        fireEvent.click(screen.getByText('Search'));
        expect(mockOnChange).toBeCalledWith('/search');
    });
});
