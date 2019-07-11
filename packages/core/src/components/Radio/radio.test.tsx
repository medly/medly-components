import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Radio from './Radio';

describe('Radio component', () => {
    it('should render correctly with all the default props', () => {
        const { container } = TestUtils.render(<Radio name="gender" />);
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const { container } = TestUtils.render(<Radio name="gender" label="Female" size="M" labelPosition="right" />);
        expect(container).toMatchSnapshot();
    });
});
