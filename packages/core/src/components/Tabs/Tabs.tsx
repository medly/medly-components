import { WithStyle } from '@medly-components/utils';
import React, { useCallback, useMemo, useState } from 'react';
import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import { TabsContext } from './Tabs.context';
import * as Styled from './Tabs.styled';
import { StaticProps, TabsProps } from './types';

const Component: React.FC<TabsProps> = React.memo(
    React.forwardRef((props, ref) => {
        const { hidePanel, defaultActive, active, onChange, children, tabSize, tabBackground, forceRender, variant, ...restProps } = props,
            tabsId = props.id || 'medly-tabs',
            tabIds = useMemo(
                () =>
                    children
                        ? React.Children.toArray(children)
                              .filter((child: any) => !child.props.hide)
                              .map((child: any) => child.props.id)
                        : [],
                [children]
            ),
            [key, setKey] = useState(defaultActive || tabIds[0]),
            activeTab = useMemo(() => active || key, [active, key]),
            tabsContext = useMemo(
                () => ({ tabSize: tabSize!, tabBackground: tabBackground!, variant: variant! }),
                [tabSize, tabBackground, variant]
            );

        const handleTabChange = useCallback(
            (id: any) => {
                !active && setKey(id);
                onChange && onChange(id);
            },
            [active, onChange]
        );

        if (tabIds.length === 0) return null;

        return (
            <Styled.Tabs id={tabsId} ref={ref} {...restProps}>
                <TabsContext.Provider value={tabsContext}>
                    <TabList id={`${tabsId}-list`} active={activeTab} onChange={handleTabChange}>
                        {children}
                    </TabList>
                    {!hidePanel && (
                        <TabPanel id={`${tabsId}-panel`} active={activeTab} forceRender={forceRender}>
                            {children}
                        </TabPanel>
                    )}
                </TabsContext.Provider>
            </Styled.Tabs>
        );
    })
);
Component.displayName = 'Tabs';
Component.defaultProps = { tabSize: 'S', tabBackground: 'WHITE', forceRender: false, hidePanel: false, variant: 'flat' };

export const Tabs: React.FC<TabsProps> & StaticProps & WithStyle = Object.assign(Component, { Style: Styled.Tabs, Tab, TabList, TabPanel });
