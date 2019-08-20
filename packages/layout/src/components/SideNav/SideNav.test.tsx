import { AddIcon, HomeIcon, SearchIcon } from '@medly-components/icons';
import { TestUtils } from '@medly-components/utils';
import React from 'react';
import SideNav from './SideNav';

jest.mock('react-datepicker/dist/react-datepicker.css', () => ({}));

const { act, render, fireEvent, cleanup } = TestUtils;
afterEach(cleanup);

describe('SideNav', () => {
    it('should render properly', () => {
        const { container } = render(
            <SideNav logo={AddIcon}>
                <SideNav.NavList>
                    <SideNav.NavItem active>
                        <SideNav.NavIcon>
                            <SearchIcon />
                        </SideNav.NavIcon>
                        <SideNav.NavText>Search</SideNav.NavText>
                    </SideNav.NavItem>
                </SideNav.NavList>
                <SideNav.BottomList>
                    <SideNav.NavItem>
                        <SideNav.NavIcon>
                            <HomeIcon />
                        </SideNav.NavIcon>
                        <SideNav.NavText>Home</SideNav.NavText>
                    </SideNav.NavItem>
                </SideNav.BottomList>
            </SideNav>
        );
        expect(container).toMatchSnapshot();
    });

    it('should change width after clicking on burger icon', () => {
        const { container, getByTestId } = render(
            <SideNav>
                <SideNav.NavList>
                    <SideNav.NavItem>
                        <SideNav.NavIcon>
                            <HomeIcon />
                        </SideNav.NavIcon>
                        <SideNav.NavText>Home</SideNav.NavText>
                    </SideNav.NavItem>
                    <SideNav.NavItem active>
                        <SideNav.NavIcon>
                            <SearchIcon />
                        </SideNav.NavIcon>
                        <SideNav.NavText>Search</SideNav.NavText>
                    </SideNav.NavItem>
                </SideNav.NavList>
            </SideNav>
        );
        act(() => {
            fireEvent.click(container.querySelector('button'));
        });
        expect(getByTestId('sidenav')).toMatchSnapshot();
    });

    it('should change width when clicked on item with sidenavOpenCloseOnClick prop given', () => {
        const mockOnClick = jest.fn();

        const { getByText, getByTestId } = render(
            <SideNav>
                <SideNav.NavList>
                    <SideNav.NavItem>
                        <SideNav.NavIcon>
                            <HomeIcon />
                        </SideNav.NavIcon>
                        <SideNav.NavText>Home</SideNav.NavText>
                    </SideNav.NavItem>
                    <SideNav.NavItem active openSideNavOnClick onClick={mockOnClick}>
                        <SideNav.NavIcon>
                            <SearchIcon />
                        </SideNav.NavIcon>
                        <SideNav.NavText>Search</SideNav.NavText>
                        <SideNav.SubNavList>
                            <SideNav.NavItem active>
                                <SideNav.NavText>Cars</SideNav.NavText>
                            </SideNav.NavItem>
                            <SideNav.NavItem>
                                <SideNav.NavText>Bikes</SideNav.NavText>
                            </SideNav.NavItem>
                            <SideNav.NavItem>
                                <SideNav.NavText>Phones</SideNav.NavText>
                            </SideNav.NavItem>
                        </SideNav.SubNavList>
                    </SideNav.NavItem>
                </SideNav.NavList>
            </SideNav>
        );
        act(() => {
            fireEvent.click(getByText('Search'));
        });
        expect(mockOnClick).toBeCalled();
        expect(getByTestId('sidenav')).toMatchSnapshot();
    });

    it('should close sidenav if we click outside', () => {
        const { container, getByText, getByTestId } = render(
            <div>
                <p>Outer Element</p>
                <SideNav>
                    <SideNav.NavList>
                        <SideNav.NavItem>
                            <SideNav.NavIcon>
                                <HomeIcon />
                            </SideNav.NavIcon>
                            <SideNav.NavText>Home</SideNav.NavText>
                        </SideNav.NavItem>
                    </SideNav.NavList>
                </SideNav>
            </div>
        );
        act(() => {
            fireEvent.click(container.querySelector('button'));
        });
        act(() => {
            fireEvent.click(getByText('Outer Element'));
        });
        expect(getByTestId('sidenav')).toMatchSnapshot();
    });
});
