import { render } from '../../utils/test-utils';
import 'jest-styled-components';
import React from 'react';
import Input from './Input';

describe('Input component', () => {
    it('should render correctly', () => {
        const { container } = render(<Input type="email" />);
        expect(container).toMatchSnapshot();
    });
});
