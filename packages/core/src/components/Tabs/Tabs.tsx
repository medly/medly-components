import { WithStyle } from '@medly-components/utils';
import React, { useCallback, useMemo, useState } from 'react';
import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import * as Styled from './Tabs.styled';
import { Props, StaticProps } from './types';

export const Tabs: React.SFC<Props> & StaticProps & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { defaultActive, active, onChange, children, ...restProps } = props,
            tabsId = props.id || 'medly-tabs',
            tabIds = useMemo(
                () =>
                    children
                        ? React.Children.toArray(children)
                              .filter((child: any) => !child.props.hide)
                              .map((child: any) => child.props.id)
                        : [undefined],
                [children]
            ),
            [key, setKey] = useState(defaultActive || tabIds[0]),
            activeTab = useMemo(() => active || key, [active, key]);

        const handleTabChange = useCallback(
            (id: any) => {
                !active && setKey(id);
                onChange && onChange(id);
            },
            [active, onChange]
        );

        if (React.Children.count(children) === 0) return null;

        return (
            <Styled.Tabs id={tabsId} ref={ref}>
                <TabList {...restProps} id={`${tabsId}-list`} active={activeTab} onChange={handleTabChange}>
                    {children}
                </TabList>
                <TabPanel id={`${tabsId}-panel`} active={activeTab}>
                    {children}
                </TabPanel>
            </Styled.Tabs>
        );
    })
);
Tabs.displayName = 'Tabs';
Tabs.Style = Styled.Tabs;
Tabs.Tab = Tab;
Tabs.TabList = TabList;
Tabs.TabPanel = TabPanel;
