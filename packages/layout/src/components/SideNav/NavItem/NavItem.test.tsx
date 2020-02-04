import { HomeIcon, SearchIcon } from '@medly-components/icons';
import { act, cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { SideNav } from '../SideNav';

const renderer = (mockOnClick = jest.fn()) =>
    render(
        <SideNav>
            <SideNav.NavList>
                <SideNav.NavItem path="/home">
                    <SideNav.NavIcon>
                        <HomeIcon />
                    </SideNav.NavIcon>
                    <SideNav.NavText>Home</SideNav.NavText>
                </SideNav.NavItem>
                <SideNav.NavItem path="/search" openSideNavOnClick onClick={mockOnClick}>
                    <SideNav.NavIcon>
                        <SearchIcon />
                    </SideNav.NavIcon>
                    <SideNav.NavText>Search</SideNav.NavText>
                    <SideNav.SubNavList>
                        <SideNav.NavItem path="/search/cars">
                            <SideNav.NavText>Cars</SideNav.NavText>
                        </SideNav.NavItem>
                        <SideNav.NavItem path="/search/bikes">
                            <SideNav.NavText>Bikes</SideNav.NavText>
                        </SideNav.NavItem>
                        <SideNav.NavItem path="/search/phones">
                            <SideNav.NavText>Phones</SideNav.NavText>
                        </SideNav.NavItem>
                    </SideNav.SubNavList>
                </SideNav.NavItem>
            </SideNav.NavList>
        </SideNav>
    );
describe('NavItem', () => {
    afterEach(cleanup);

    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should be able to click on nested item', () => {
        const mockOnClick = jest.fn();
        const { container, getByText } = renderer(mockOnClick);
        act(() => {
            fireEvent.click(container.querySelector('button'));
            fireEvent.click(getByText('Search'));
            fireEvent.click(getByText('Cars'));
        });
        expect(mockOnClick).toBeCalled();
        expect(container.querySelector('#medly-sidenav')).toMatchSnapshot();
    });

    it('should fold the open item on click on it', () => {
        const mockOnClick = jest.fn();
        const { container, getByText } = renderer(mockOnClick);
        fireEvent.click(container.querySelector('button'));
        fireEvent.click(getByText('Search'));
        fireEvent.click(getByText('Search'));

        expect(container.querySelector('#medly-sidenav')).toMatchSnapshot();
    });
});
