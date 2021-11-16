import { Text } from '@medly-components/core';
import { HomeIcon, SearchIcon } from '@medly-components/icons';
import { cleanup, fireEvent, render } from '@test-utils';
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
        const { getByText } = renderer('/home');
        fireEvent.mouseOver(getByText('Search'));
        expect(getByText('Search')).toMatchSnapshot();
    });

    it('should render properly when it is in active state', () => {
        const { getByText } = renderer('/home');
        expect(getByText('Home')).toMatchSnapshot();
    });

    it('should render properly when it is in hovered state', () => {
        const { getByText } = renderer('/home');
        fireEvent.mouseOver(getByText('Search'));
        expect(getByText('Search')).toMatchSnapshot();
    });

    it('should call onChange with expected data', () => {
        const mockOnChange = jest.fn();
        const { getByText, getByTitle } = renderer('', mockOnChange);
        fireEvent.click(getByTitle('medly-sidenav-toggle-expand'));
        fireEvent.click(getByText('Search'));
        expect(mockOnChange).toBeCalledWith('/search');
    });
});
