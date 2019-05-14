import { TestUtils } from '@medly-components/utils';
import 'jest-styled-components';
import React from 'react';
import Checkbox from '../Checkbox';
import CheckboxGroup from './CheckboxGroup';

describe('CheckboxGroup component', () => {
    it('should render correctly with all the default props', () => {
        const { container } = TestUtils.render(
            <CheckboxGroup>
                <Checkbox label="Apple" />
                <Checkbox label="Orange" />
            </CheckboxGroup>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const { container } = TestUtils.render(
            <CheckboxGroup label="Fruits" name="fruits" required size="S" labelPosition="top">
                <Checkbox label="Apple" />
                <Checkbox label="Orange" />
            </CheckboxGroup>
        );
        expect(container).toMatchSnapshot();
    });
});
