import 'jest-styled-components';
import React from 'react';
import { render } from '../../utils/test-utils';
import Button from './Button';

describe('Button component', () => {
    it('should render properly with flat variant and primary color', () => {
        const { container } = render(
            <Button variant="flat" color="primary">
                Flat Button
            </Button>
        );
        expect(container).toMatchSnapshot();
    });
    it('should render properly with outlined variant and secondary color', () => {
        const { container } = render(
            <Button variant="outlined" color="secondary">
                Outlined Button
            </Button>
        );
        expect(container).toMatchSnapshot();
    });
    it('should render properly with solid variant', () => {
        const { container } = render(<Button variant="solid">Solid Button</Button>);
        expect(container).toMatchSnapshot();
    });

    it('should wrap children into Text component when rendering string or number', () => {
        const { container } = render(
            <Button variant="solid">
                Some text
                <i>some icon</i>
                <div>element2</div>
            </Button>
        );
        expect(container).toMatchSnapshot();
    });
});
