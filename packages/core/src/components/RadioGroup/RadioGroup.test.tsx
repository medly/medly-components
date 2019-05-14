import { TestUtils } from '@medly-components/utils';
import 'jest-styled-components';
import React from 'react';
import Radio from '../Radio';
import RadioGroup from './RadioGroup';

describe('Radio component', () => {
    it('should render correctly with all the default props', () => {
        const { container } = TestUtils.render(
            <RadioGroup>
                <Radio label="Female" />
                <Radio label="Male" />
            </RadioGroup>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const { container } = TestUtils.render(
            <RadioGroup label="Gender" name="gender" required size="M" labelPosition="top">
                <Radio label="Female" />
                <Radio label="Male" />
            </RadioGroup>
        );
        expect(container).toMatchSnapshot();
    });
});
