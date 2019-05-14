import { TestUtils } from '@medly-components/utils';
import 'jest-styled-components';
import React from 'react';
import Checkbox from './Checkbox';

describe('Checkbox component', () => {
    it('should render correctly with all the default props', () => {
        const { container } = TestUtils.render(<Checkbox name="gender" />);
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const { container } = TestUtils.render(<Checkbox name="gender" label="Female" size="M" labelPosition="end" />);
        expect(container).toMatchSnapshot();
    });
});
