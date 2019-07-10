import { TestUtils } from '@medly-components/utils';
import 'jest-styled-components';
import React from 'react';
import Label from './Label';

describe('Label component', () => {
    it('should render correctly with default props', () => {
        const { container } = TestUtils.render(<Label>Label</Label>);
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const { container } = TestUtils.render(
            <Label required showPointer labelPosition="top" textSize="M2" textWeight="Light" textColor="pink">
                Demo Label
            </Label>
        );
        expect(container).toMatchSnapshot();
    });
});
