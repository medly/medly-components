import { Text } from '@medly-components/core';
import { EditIcon, HomeIcon, SearchIcon } from '@medly-components/icons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import SideNav from './SideNav';

storiesOf('Layout', module).add(
    'SideNav',
    () => (
        <SideNav>
            <SideNav.NavItem as={'a'} href="#">
                <SideNav.NavIcon>
                    <HomeIcon />
                </SideNav.NavIcon>
                <SideNav.NavText>Home</SideNav.NavText>
            </SideNav.NavItem>
            <SideNav.NavItem openSideNavOnClick active>
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
            <SideNav.NavItem>
                <SideNav.NavIcon>
                    <EditIcon />
                </SideNav.NavIcon>
                <SideNav.NavText>Edit</SideNav.NavText>
            </SideNav.NavItem>
        </SideNav>
    ),
    {
        props: {
            propTablesExclude: [Text, SideNav.NavItem]
        }
    }
);
