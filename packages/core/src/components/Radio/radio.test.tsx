import { render } from '@test-utils';
import React from 'react';
import { Radio } from './Radio';

describe('Radio component', () => {
    it('should render correctly with all the default props', () => {
        const { container } = render(<Radio value="female" name="Female" />);
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const { container } = render(
            <Radio disabled fullWidth name="gender" value="female" label="Female" size="M" labelPosition="right" />
        );
        expect(container).toMatchSnapshot();
    });
});
