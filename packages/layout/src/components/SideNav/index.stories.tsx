import { Text } from '@medly-components/core';
import { wInfo } from '@medly-components/utils';
import { storiesOf } from '@storybook/react';
import React from 'react';
import SideNav from './SideNav';

storiesOf('Layout', module).add(
    'SideNav',
    () => (
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
    ),
    wInfo(``)
);
