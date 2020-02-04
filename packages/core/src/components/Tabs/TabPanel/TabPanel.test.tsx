import { render } from '@test-utils';
import React from 'react';
import Tab from '../Tab';
import { TabPanel } from './TabPanel';

describe('TabPanel', () => {
    it('should render only active tab content', () => {
        const { container } = render(
            <TabPanel id="tab-panel" active="tab1" onChange={jest.fn()}>
                <Tab id="tab1" label="Add">
                    Content for the add panel
                </Tab>
                <Tab id="tab2" label="Edit">
                    Content for the edit panel
                </Tab>
            </TabPanel>
        );
        expect(container).toMatchSnapshot();
    });
});
