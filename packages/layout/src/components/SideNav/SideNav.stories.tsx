import { EditIcon, HomeIcon, SearchIcon, SliderIcon } from '@medly-components/icons';
import { defaultTheme, SideNavTheme } from '@medly-components/theme';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React, { SFC } from 'react';
import NavList from './NavList';
import { SideNav } from './SideNav';
import { SideNavStaticProps } from './types';

const { NavItem, NavIcon, NavText, SubNavList } = SideNav;

export const Theme: SFC<SideNavTheme> = props => null;
Theme.defaultProps = {
    ...defaultTheme.sideNav
};

export const StaticProps: SFC<SideNavStaticProps> = () => null;

export const Basic = () => (
    <SideNav closeOnOuterClick={boolean('Close on outer click', false)} onChange={action('NavItem clicked')} defaultActive="/">
        <NavList>
            <NavItem as={'a'} path="/">
                <NavIcon>
                    <HomeIcon />
                </NavIcon>
                <NavText>Dashboard</NavText>
            </NavItem>
            <NavItem openSideNavOnClick path="/reports">
                <NavIcon>
                    <SearchIcon />
                </NavIcon>
                <NavText>Reports</NavText>
                <SubNavList>
                    <NavItem path="/reports/interactive">
                        <NavText>Interactive</NavText>
                    </NavItem>
                    <NavItem path="/reports/audit">
                        <NavText>Audit</NavText>
                    </NavItem>
                    <NavItem path="/reports/invoice">
                        <NavText>Invoice</NavText>
                    </NavItem>
                </SubNavList>
            </NavItem>
            <NavItem openSideNavOnClick path="/manage">
                <NavIcon>
                    <SliderIcon />
                </NavIcon>
                <NavText>Manage</NavText>
                <SubNavList>
                    <NavItem path="/manage/masterData">
                        <NavText>Master Data</NavText>
                        <SubNavList>
                            <NavItem path="/manage/masterData/coveredEntity">
                                <NavText>Covered Entity</NavText>
                            </NavItem>
                            <NavItem path="/manage/masterData/pharmacies">
                                <NavText>Pharmacies</NavText>
                            </NavItem>
                        </SubNavList>
                    </NavItem>
                    <NavItem path="/manage/orders">
                        <NavText>Orders</NavText>
                    </NavItem>
                    <NavItem path="/manage/users">
                        <NavText>Users</NavText>
                    </NavItem>
                </SubNavList>
            </NavItem>
            <NavItem path="/support">
                <NavIcon>
                    <EditIcon />
                </NavIcon>
                <NavText>Support</NavText>
            </NavItem>
        </NavList>
    </SideNav>
);
