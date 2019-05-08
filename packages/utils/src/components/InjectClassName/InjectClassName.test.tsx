import { TestUtils } from '@medly-components/utils';
import 'jest-styled-components';
import React from 'react';
import InjectClassName from './InjectClassName';

describe('InjectClassName component', () => {
    it('should inject className prop to all children', () => {
        const { container } = TestUtils.render(
            <InjectClassName className="test-className">
                <div>Test div 1</div>
                <div>Test div 2</div>
            </InjectClassName>
        );
        expect(container).toMatchSnapshot();
    });
});
