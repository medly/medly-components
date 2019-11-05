import { AddIcon } from '@medly-components/icons';
import { TestUtils } from '@medly-components/utils';
import React from 'react';
import { Tab } from './Tab';

const { render } = TestUtils;
describe('Tab', () => {
    it('should render properly', () => {
        const { container } = render(
            <Tab id="tab1" label="Add">
                Content for the add panel
            </Tab>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly with icon', () => {
        const { container } = render(
            <Tab id="tab1" label="Add" icon={AddIcon}>
                Content for the add panel
            </Tab>
        );
        expect(container).toMatchSnapshot();
    });
});
