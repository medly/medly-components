import { HomeIcon, SearchIcon } from '@medly-components/icons';
import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { SideNav } from '../SideNav';

const renderer = () =>
    render(
        <SideNav>
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
                            <SideNav.SubNavList>
                                <SideNav.NavItem path="/search/cars/honda">
                                    <SideNav.NavText>Honda</SideNav.NavText>
                                </SideNav.NavItem>
                                <SideNav.NavItem path="/search/hyundai">
                                    <SideNav.NavText>Hyundai</SideNav.NavText>
                                </SideNav.NavItem>
                            </SideNav.SubNavList>
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
describe('SubNavList', () => {
    afterEach(cleanup);

    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should be able to click on nested item', () => {
        const { container, getByText } = renderer();
        fireEvent.click(container.querySelector('button'));
        fireEvent.click(getByText('Search'));
        fireEvent.click(getByText('Cars'));
        fireEvent.click(getByText('Honda'));
        expect(container.querySelector('#medly-sidenav')).toMatchSnapshot();
    });
});
