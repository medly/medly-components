import { AddIcon, HomeIcon, SearchIcon } from '@medly-components/icons';
import { TestUtils } from '@medly-components/utils';
import React from 'react';
import { SideNav } from './SideNav';

const { act, render, fireEvent, cleanup } = TestUtils;

const renderer = (mockOnChange = jest.fn()) =>
    render(
        <SideNav logo={HomeIcon} onChange={mockOnChange}>
            <SideNav.NavList>
                <SideNav.NavItem path="/home">
                    <SideNav.NavIcon>
                        <HomeIcon />
                    </SideNav.NavIcon>
                    <SideNav.NavText>Home</SideNav.NavText>
                </SideNav.NavItem>
                <SideNav.NavItem path="/search" openSideNavOnClick>
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
                <SideNav.BottomList>
                    <SideNav.NavText>Hi Dummy Username</SideNav.NavText>
                </SideNav.BottomList>
            </SideNav.NavList>
        </SideNav>
    );
describe('SideNav', () => {
    afterEach(cleanup);

    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should change width after clicking on burger icon', () => {
        const { container } = renderer();
        act(() => {
            fireEvent.click(container.querySelector('button'));
        });
        expect(container.querySelector('#medly-sidenav')).toMatchSnapshot();
    });

    it('should call onChange with expected path', () => {
        const mockOnChange = jest.fn();
        const { container, getByText } = renderer(mockOnChange);
        fireEvent.click(container.querySelector('button'));
        fireEvent.click(getByText('Search'));
        fireEvent.click(getByText('Cars'));
        expect(mockOnChange).toBeCalledWith('/search/cars');
    });

    it('should change width when clicked on item with sidenavOpenCloseOnClick prop given', () => {
        const { getByText, container } = renderer();
        act(() => {
            fireEvent.click(getByText('Search'));
        });
        expect(container.querySelector('#medly-sidenav')).toMatchSnapshot();
    });

    it('should close sidenav if we click outside', () => {
        const mockOnClick = jest.fn(),
            { container, getByText } = render(
                <div>
                    <p>Outer Element</p>
                    <SideNav closeOnOuterClick>
                        <SideNav.NavList>
                            <SideNav.NavItem onClick={mockOnClick}>
                                <SideNav.NavIcon>
                                    <HomeIcon />
                                </SideNav.NavIcon>
                                <SideNav.NavText>Home</SideNav.NavText>
                            </SideNav.NavItem>
                        </SideNav.NavList>
                    </SideNav>
                </div>
            );
        fireEvent.click(container.querySelector('button'));
        fireEvent.click(getByText('Home'));
        expect(mockOnClick).toBeCalled();

        fireEvent.click(getByText('Outer Element'));
        expect(container.querySelector('#medly-sidenav')).toMatchSnapshot();
    });
});
