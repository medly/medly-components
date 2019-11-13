import { EditIcon, HomeIcon, SearchIcon } from '@medly-components/icons';
import { defaultTheme, SideNavTheme } from '@medly-components/theme';
import { boolean } from '@storybook/addon-knobs';
import React, { SFC } from 'react';
import { SideNav } from './SideNav';
import { SideNavStaticProps } from './types';

export const Theme: SFC<SideNavTheme> = props => null;
Theme.defaultProps = {
    ...defaultTheme.sideNav
};

export const StaticProps: SFC<SideNavStaticProps> = () => null;

export const Basic = () => (
    <SideNav closeOnOuterClick={boolean('Close on outer click', false)}>
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
                    <SideNav.SubNavList>
                        <SideNav.NavItem active>
                            <SideNav.NavText>Engine</SideNav.NavText>
                        </SideNav.NavItem>
                        <SideNav.NavItem>
                            <SideNav.NavText>Speaker</SideNav.NavText>
                        </SideNav.NavItem>
                    </SideNav.SubNavList>
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
);
