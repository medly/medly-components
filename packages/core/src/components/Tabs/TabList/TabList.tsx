import { useKeyPress, WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { Children, memo, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Tab from '../Tab';
import { TabsContext } from '../Tabs.context';
import * as Styled from './TabList.styled';
import { TabListProps } from './types';

const Component: FC<TabListProps> = memo(props => {
    const { active, onChange, ...restProps } = props,
        leftPress = useKeyPress('ArrowLeft'),
        rightPress = useKeyPress('ArrowRight'),
        homePress = useKeyPress('Home'),
        endPress = useKeyPress('End'),
        [isFocused, setFocusState] = useState(false),
        tabIds = useMemo(
            () =>
                Children.toArray(props.children)
                    .filter((child: any) => !child.props.disabled)
                    .map((child: any) => child.props.id),
            [props.children]
        ),
        enabledTabIds = useMemo(() => Children.toArray(props.children).map((child: any) => child.props.id), [props.children]),
        { 0: first, [tabIds.length - 1]: last } = tabIds,
        activeTabIdx = enabledTabIds.indexOf(active),
        totalTabs = Children.toArray(props.children).length,
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
            {Children.toArray(props.children).reduce((acc: any[], child: any) => {
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
export const TabList: FC<TabListProps> & WithStyle = Object.assign(Component, { Style: Styled.TabList });
