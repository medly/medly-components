import { Text } from '@medly-components/core';
import { DashboardIcon, DateRangeIcon, FolderOpenIcon, InsertChartIcon, SettingsIcon } from '@medly-components/icons';
import { defaultTheme, SideNavTheme } from '@medly-components/theme';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React, { FC } from 'react';
import Header from './MedlySidenavHeader';
import { SideNav } from './SideNav';
import { Context } from './SideNav.context';
import { SideNavStaticProps } from './types';

export const Theme: FC<SideNavTheme> = () => null;
Theme.defaultProps = {
    ...defaultTheme.sideNav
};

export const StaticProps: FC<SideNavStaticProps> = () => null;
export const SidenavContextTheme: FC<Context> = () => null;

export const Basic = () => (
    <SideNav
        onChange={action('NavItem clicked')}
        defaultActive="/"
        hideShadow={boolean('Hide Shadow', false)}
        defaultOpen={boolean('defaultOpen', false)}
    >
        <Header />
        <SideNav.List>
            <SideNav.Nav path="/">
                <DashboardIcon size="S" />
                <Text>Dashboard</Text>
            </SideNav.Nav>
            <SideNav.Nav path="/reports">
                <InsertChartIcon size="S" />
                <Text>Reports</Text>
            </SideNav.Nav>
            <SideNav.Nav path="/statements">
                <FolderOpenIcon size="S" />
                <Text>Statements</Text>
            </SideNav.Nav>
            <SideNav.Group title="Group">
                <SideNav.Nav path="/transactions">
                    <DateRangeIcon size="S" />
                    <Text>Transactions</Text>
                </SideNav.Nav>
                <SideNav.Nav path="/settings">
                    <SettingsIcon size="S" />
                    <Text>Settings</Text>
                </SideNav.Nav>
            </SideNav.Group>
        </SideNav.List>
    </SideNav>
);
