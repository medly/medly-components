import { Text } from '@medly-components/core';
import { TestUtils } from '@medly-components/utils';
import 'jest-styled-components';
import React from 'react';
import SideNav from './SideNav';

describe('SideNav component', () => {
    it('should render properly', () => {
        const { container } = TestUtils.render(
            <SideNav>
                <SideNav.NavItem>
                    <Text>Dashboard</Text>
                </SideNav.NavItem>
                <SideNav.NavItem active>
                    <Text>Pharmacies</Text>
                </SideNav.NavItem>
                <SideNav.NavItem>
                    <Text>Covered Entities</Text>
                </SideNav.NavItem>
                <SideNav.NavItem>
                    <Text>Reports</Text>
                </SideNav.NavItem>
                <SideNav.NavItem>
                    <Text>Manage Users</Text>
                </SideNav.NavItem>
                <SideNav.NavItem>
                    <Text>Logout</Text>
                </SideNav.NavItem>
            </SideNav>
        );
        expect(container).toMatchSnapshot();
    });
});
