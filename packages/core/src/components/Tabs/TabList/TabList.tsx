import { useKeyPress, WithStyle } from '@medly-components/utils';
import React, { useEffect, useMemo, useState } from 'react';
import Tab from '../Tab';
import * as Styled from './TabList.styled';
import { Props } from './types';

export const TabList: React.SFC<Props> & WithStyle = React.memo(props => {
    const { active, children, onChange, ...restProps } = props,
        leftPress = useKeyPress('ArrowLeft'),
        rightPress = useKeyPress('ArrowRight'),
        homePress = useKeyPress('Home'),
        endPress = useKeyPress('End'),
        [isFoxused, setFocusState] = useState(false),
        tabIds = useMemo(() => React.Children.map(children, (child: any) => child.props.id), [children]),
        { 0: first, [tabIds.length - 1]: last } = tabIds;

    useEffect(() => {
        rightPress && isFoxused && (active === last ? onChange(first) : onChange(tabIds[tabIds.indexOf(active) + 1]));
    }, [rightPress]);
    useEffect(() => {
        leftPress && isFoxused && (active === first ? onChange(last) : onChange(tabIds[tabIds.indexOf(active) - 1]));
    }, [leftPress]);
    useEffect(() => {
        homePress && isFoxused && onChange(first);
    }, [homePress]);
    useEffect(() => {
        endPress && isFoxused && onChange(last);
    }, [endPress]);

    const handleChange = (id: any) => () => onChange(id),
        handleFocus = (state: boolean) => () => {
            setFocusState(state);
        };

    return (
        <Styled.TabList onFocus={handleFocus(true)} onBlur={handleFocus(false)} {...restProps}>
            {React.Children.map(props.children, (child: any) => {
                const { id, label } = child.props;
                return <Tab key={id} active={id === active} label={label} onClick={handleChange(id)} {...child.props} />;
            })}
        </Styled.TabList>
    );
});

TabList.Style = Styled.TabList;
