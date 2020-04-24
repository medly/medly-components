import { Text } from '@medly-components/core';
import { DashboardIcon, DateRangeIcon, FolderOpenIcon, InsertChartIcon, SettingsIcon } from '@medly-components/icons';
import { defaultTheme, SideNavTheme } from '@medly-components/theme';
import { action } from '@storybook/addon-actions';
import React, { SFC } from 'react';
import Header from './MedlySidenavHeader';
import { SideNav } from './SideNav';
import { Context } from './SideNav.context';
import { SideNavStaticProps } from './types';

export const Theme: SFC<SideNavTheme> = () => null;
Theme.defaultProps = {
    ...defaultTheme.sideNav
};

export const StaticProps: SFC<SideNavStaticProps> = () => null;
export const SidenavContextTheme: SFC<Context> = () => null;

export const Basic = () => (
    <SideNav onChange={action('NavItem clicked')} defaultActive="/">
        <Header />
        <SideNav.List>
            <SideNav.Nav path="/">
                <DashboardIcon />
                <Text>Dashboard</Text>
            </SideNav.Nav>
            <SideNav.Nav path="/reports">
                <InsertChartIcon />
                <Text>Reports</Text>
            </SideNav.Nav>
            <SideNav.Nav path="/statements">
                <FolderOpenIcon />
                <Text>Statements</Text>
            </SideNav.Nav>
            <SideNav.Nav path="/transactions">
                <DateRangeIcon />
                <Text>Transactions</Text>
            </SideNav.Nav>
            <SideNav.Nav path="/settings">
                <SettingsIcon />
                <Text>Settings</Text>
            </SideNav.Nav>
        </SideNav.List>
    </SideNav>
);
