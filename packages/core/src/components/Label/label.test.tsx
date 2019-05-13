import { TestUtils } from '@medly-components/utils';
import 'jest-styled-components';
import React from 'react';
import Label from './Label';

describe('Label component', () => {
    it('should render correctly with all the props given', () => {
        const { container } = TestUtils.render(
            <Label labelPosition="top" required>
                Demo Label
            </Label>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render correctly when required props is falsy', () => {
        const { container } = TestUtils.render(<Label labelPosition="start">Demo Label</Label>);
        expect(container).toMatchSnapshot();
    });
});
