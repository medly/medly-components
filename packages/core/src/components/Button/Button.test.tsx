import { render } from '@core-test-utils';
import 'jest-styled-components';
import React from 'react';
import Button from './Button';

describe('Button component', () => {
    it('should render properly with flat prop', () => {
        const { container } = render(<Button flat>Flat Button</Button>);
        expect(container).toMatchSnapshot();
    });
    it('should render properly with outlined prop', () => {
        const { container } = render(<Button outlined>Outlined Button</Button>);
        expect(container).toMatchSnapshot();
    });
    it('should render properly with solid prop', () => {
        const { container } = render(<Button solid>Solid Button</Button>);
        expect(container).toMatchSnapshot();
    });

    it('should wrap children into Text component when rendering string or number', () => {
        const { container } = render(
            <Button solid>
                Some text
                <i>some icon</i>
                <div>element2</div>
            </Button>
        );
        expect(container).toMatchSnapshot();
    });
});
