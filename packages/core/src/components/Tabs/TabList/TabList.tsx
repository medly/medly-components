import { useKeyPress, WithStyle } from '@medly-components/utils';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Tab from '../Tab';
import { TabsContext } from '../Tabs.context';
import * as Styled from './TabList.styled';
import { TabListProps } from './types';

const Component: React.FC<TabListProps> = React.memo(props => {
    const { active, children, onChange, ...restProps } = props,
        leftPress = useKeyPress('ArrowLeft'),
        rightPress = useKeyPress('ArrowRight'),
        homePress = useKeyPress('Home'),
        endPress = useKeyPress('End'),
        [isFocused, setFocusState] = useState(false),
        tabIds = useMemo(
            () =>
                React.Children.toArray(children)
                    .filter((child: any) => !child.props.disabled)
                    .map((child: any) => child.props.id),
            [children]
        ),
        { 0: first, [tabIds.length - 1]: last } = tabIds,
        activeTabIdx = tabIds.indexOf(active),
        totalTabs = React.Children.toArray(children).length,
        { tabSize, variant } = useContext(TabsContext);

    useEffect(() => {
        rightPress && isFocused && (active === last ? onChange(first) : onChange(tabIds[tabIds.indexOf(active) + 1]));
    }, [rightPress]);
    useEffect(() => {
        leftPress && isFocused && (active === first ? onChange(last) : onChange(tabIds[tabIds.indexOf(active) - 1]));
    }, [leftPress]);
    useEffect(() => {
        homePress && isFocused && onChange(first);
    }, [homePress]);
    useEffect(() => {
        endPress && isFocused && onChange(last);
    }, [endPress]);

    const handleChange = (id: any) => () => onChange(id),
        changeFocusState = useCallback(() => setFocusState(val => !val), []);

    return (
        <Styled.TabList variant={variant!} tabSize={tabSize!} onFocus={changeFocusState} onBlur={changeFocusState} {...restProps}>
            {variant === 'solid' && <Styled.Slider tabSize={tabSize!} active={activeTabIdx} totalTabs={totalTabs} />}
            {React.Children.toArray(props.children).reduce((acc: any[], child: any) => {
                const { id, label, hide } = child.props;
                const hideTab = hide && variant !== 'solid';

                !hideTab &&
                    acc.push(
                        <Tab
                            key={id}
                            active={id === active}
                            label={label}
                            onClick={handleChange(id)}
                            totalTabs={totalTabs}
                            variant={variant}
                            {...child.props}
                        />
                    );
                return acc;
            }, [])}
        </Styled.TabList>
    );
});
Component.displayName = 'TabList';
export const TabList: React.FC<TabListProps> & WithStyle = Object.assign(Component, { Style: Styled.TabList });
