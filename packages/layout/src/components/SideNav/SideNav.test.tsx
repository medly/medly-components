import { HomeIcon, SearchIcon } from '@medly-components/icons';
import { TestUtils } from '@medly-components/utils';
import 'jest-styled-components';
import React from 'react';
import SideNav from './SideNav';

const { render, fireEvent, cleanup } = TestUtils;
afterEach(cleanup);

describe('SideNav component', () => {
    it('should render properly', () => {
        const { container } = render(
            <SideNav>
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
            </SideNav>
        );
        expect(container).toMatchSnapshot();
    });

    it('should change width after clicking on burger icon', () => {
        const { container } = render(
            <SideNav>
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
            </SideNav>
        );
        fireEvent.click(container.querySelector('button'));
        expect(container).toMatchSnapshot();
    });
});
