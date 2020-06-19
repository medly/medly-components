import { AddIcon, DeleteIcon, EditIcon } from '@medly-components/icons';
import { defaultTheme, TabsTheme } from '@medly-components/theme';
import { select } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { Tabs } from './Tabs';
import { Props } from './types';

export const ThemeInterface: React.FC<TabsTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.tabs
};

const size: Props['tabSize'][] = ['S', 'M', 'L'];

export const Basic = () => (
    <Tabs aria-label="Basic Tabs" tabSize={select('Tab Size', size, 'S')}>
        <Tabs.Tab id="tab1" label="Add" hide>
            Content for the add panel
        </Tabs.Tab>
        <Tabs.Tab id="tab2" label="Edit">
            Content for the edit panel
        </Tabs.Tab>
        <Tabs.Tab id="tab3" label="Delete">
            Content for the delete panel
        </Tabs.Tab>
    </Tabs>
);

export const WithIcon = () => {
    return (
        <Tabs defaultActive="tab1" aria-label="WithIcon Tabs" tabSize={select('Tab Size', size, 'S')}>
            <Tabs.Tab id="tab1" label="Add" icon={AddIcon}>
                Content for the add panel
            </Tabs.Tab>
            <Tabs.Tab id="tab2" label="Edit" icon={EditIcon}>
                Content for the edit panel
            </Tabs.Tab>
            <Tabs.Tab id="tab3" label="Delete" icon={DeleteIcon} disabled={true}>
                Content for the delete panel
            </Tabs.Tab>
        </Tabs>
    );
};

export const Uncontrolled = () => {
    return (
        <Tabs defaultActive="tab1" aria-label="Uncontrolled Tabs">
            <Tabs.Tab id="tab1" label="Add">
                Content for the add panel
            </Tabs.Tab>
            <Tabs.Tab id="tab2" label="Edit">
                Content for the edit panel
            </Tabs.Tab>
            <Tabs.Tab id="tab3" label="Delete">
                Content for the delete panel
            </Tabs.Tab>
        </Tabs>
    );
};

export const Controlled = () => {
    const [active, setActiveTab] = useState('tab1');
    return (
        <Tabs active={active} onChange={setActiveTab} aria-label="Controlled Tabs">
            <Tabs.Tab id="tab1" label="Add">
                Content for the add panel
            </Tabs.Tab>
            <Tabs.Tab id="tab2" label="Edit">
                Content for the edit panel
            </Tabs.Tab>
            <Tabs.Tab id="tab3" label="Delete">
                Content for the delete panel
            </Tabs.Tab>
        </Tabs>
    );
};
