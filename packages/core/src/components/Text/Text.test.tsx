import { TestUtils } from '@medly-components/utils';
import React from 'react';

import { Text } from './Text';

describe('Text Component', () => {
    it('should render span element by default', () => {
        const { container } = TestUtils.render(<Text />);
        expect(container).toMatchSnapshot();
    });

    it('should render strong element for strong', () => {
        const { container } = TestUtils.render(<Text textWeight="Strong" />);
        expect(container).toMatchSnapshot();
    });

    it('should render with all the props', () => {
        const { container } = TestUtils.render(<Text fullWidth textSize="M2" textWeight="Light" textColor="pink" uppercase lineThrough />);
        expect(container).toMatchSnapshot();
    });
});
