import { AddIcon, DeleteIcon, EditIcon } from '@medly-components/icons';
import { TabsTheme } from '@medly-components/theme';
import { HTMLProps, Omit } from '@medly-components/utils';
import React, { useState } from 'react';
import Tab from './Tab';
import { Tabs } from './Tabs';
import { Props } from './types';

export const ThemeInterface = (props: TabsTheme): any => null;

export const Basic = (props: Omit<Props, keyof Omit<HTMLProps<HTMLDivElement>, 'onChange'>>) => (
    <Tabs aria-label="Basic Tabs">
        <Tab id="tab1" label="Add">
            Content for the add panel
        </Tab>
        <Tab id="tab2" label="Edit">
            Content for the edit panel
        </Tab>
        <Tab id="tab3" label="Delete">
            Content for the delete panel
        </Tab>
    </Tabs>
);

export const WithIcon = () => {
    return (
        <Tabs defaultActive="tab1" aria-label="WithIcon Tabs">
            <Tab id="tab1" label="Add" icon={AddIcon}>
                Content for the add panel
            </Tab>
            <Tab id="tab2" label="Edit" icon={EditIcon}>
                Content for the edit panel
            </Tab>
            <Tab id="tab3" label="Delete" icon={DeleteIcon}>
                Content for the delete panel
            </Tab>
        </Tabs>
    );
};

export const Uncontrolled = () => {
    return (
        <Tabs defaultActive="tab1" aria-label="Uncontrolled Tabs">
            <Tab id="tab1" label="Add">
                Content for the add panel
            </Tab>
            <Tab id="tab2" label="Edit">
                Content for the edit panel
            </Tab>
            <Tab id="tab3" label="Delete">
                Content for the delete panel
            </Tab>
        </Tabs>
    );
};

export const Controlled = () => {
    const [active, setAciveTab] = useState('tab1');
    return (
        <Tabs active={active} onChange={setAciveTab} aria-label="Controlled Tabs">
            <Tab id="tab1" label="Add">
                Content for the add panel
            </Tab>
            <Tab id="tab2" label="Edit">
                Content for the edit panel
            </Tab>
            <Tab id="tab3" label="Delete">
                Content for the delete panel
            </Tab>
        </Tabs>
    );
};
