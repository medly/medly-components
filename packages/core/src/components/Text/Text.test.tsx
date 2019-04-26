import { render } from '@core-test-utils';
import 'jest-styled-components';
import React from 'react';

import Text from './Text';

describe('Text Component', () => {
    it('should render span element by default', () => {
        const { container } = render(<Text />);
        expect(container).toMatchSnapshot();
    });

    it('should render strong element for strong', () => {
        const { container } = render(<Text textWeight="Strong" />);
        expect(container).toMatchSnapshot();
    });

    it('should render with all the props', () => {
        const { container } = render(<Text textSize="M2" textWeight="Light" textColor="pink" uppercase lineThrough />);
        expect(container).toMatchSnapshot();
    });
});
