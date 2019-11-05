import { WithStyle } from '@medly-components/utils';
import React, { useState } from 'react';
import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import * as Styled from './Tabs.styled';
import { Props, StaticProps } from './types';

export const Tabs: React.SFC<Props> & StaticProps & WithStyle = React.memo(props => {
    const { defaultActive, active, onChange, children, ...restProps } = props,
        tabIds = children ? React.Children.map(children, (child: any) => child.props.id) : [undefined],
        [key, setKey] = useState(defaultActive || tabIds[0]),
        activeTab = active || key;

    if (React.Children.count(children) === 0) return null;

    const handleTabChange = (id: any) => {
        !active && setKey(id);
        onChange && onChange(id);
    };

    return (
        <Styled.Tabs>
            <TabList {...restProps} active={activeTab} onChange={handleTabChange}>
                {children}
            </TabList>
            <TabPanel active={activeTab}>{children}</TabPanel>
        </Styled.Tabs>
    );
});

Tabs.Style = Styled.Tabs;
Tabs.Tab = Tab;
Tabs.TabList = TabList;
Tabs.TabPanel = TabPanel;
