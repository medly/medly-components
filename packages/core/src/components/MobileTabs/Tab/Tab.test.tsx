import { render } from '@test-utils';
import React from 'react';
import { TabsContext } from '../Tabs.context';
import { TabBackground, TabSize, TabStyle } from '../types';
import { Tab } from './Tab';
import { Props } from './types';

const renderer = ({
    id = 'dummy',
    label = 'Add',
    hide = false,
    disabled = false,
    active = false,
    tabSize = 'S',
    tabStyle = 'CLOSED',
    tabBackground = 'WHITE'
}: Partial<Props> & { tabSize?: TabSize; tabStyle?: TabStyle; tabBackground?: TabBackground }) =>
    render(
        <TabsContext.Provider value={{ tabStyle, tabSize, tabBackground }}>
            <Tab {...{ id, label, hide, disabled, active }}>Content for the add panel</Tab>
        </TabsContext.Provider>
    );

describe('Tab', () => {
    it('should render active state properly', () => {
        const { container } = renderer({ active: true });
        expect(container).toMatchSnapshot();
    });

    it('should render disabled state properly', () => {
        const { container } = renderer({ disabled: true });
        expect(container).toMatchSnapshot();
    });

    test.each(['S', 'M', 'L'])('should render properly with %s tab size', (tabSize: TabSize) => {
        const { container } = renderer({ tabSize });
        expect(container).toMatchSnapshot();
    });

    test.each(['OPEN', 'CLOSED'])('should render properly with %s tab style', (tabStyle: TabStyle) => {
        const { container } = renderer({ tabStyle });
        expect(container).toMatchSnapshot();
    });

    test.each(['WHITE', 'GREY'])('should render properly with %s tab background', (tabBackground: TabBackground) => {
        const { container } = renderer({ tabBackground });
        expect(container).toMatchSnapshot();
    });

    test.each(['S', 'M', 'L'])('should render properly with %s tab size', (tabSize: TabSize) => {
        const { container } = renderer({ tabSize });
        expect(container).toMatchSnapshot();
    });
});
