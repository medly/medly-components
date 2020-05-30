import { AddIcon } from '@medly-components/icons';
import { render } from '@test-utils';
import React from 'react';
import { Button } from './Button';
import { Props } from './types';

describe('Button component', () => {
    describe.each(['solid', 'outlined', 'flat'])('should render properly with %p variant', (variant: Props['variant']) => {
        test.each(['default', 'confirmation', 'error'])('and %p color ', (color: Props['color']) => {
            const { container } = render(
                <Button variant={variant} color={color}>
                    Flat Button
                </Button>
            );
            expect(container).toMatchSnapshot();
        });

        test('should render properly when it is disabled', () => {
            const { container } = render(
                <Button disabled variant="solid">
                    Solid Button
                </Button>
            );
            expect(container).toMatchSnapshot();
        });
    });

    test.each(['S', 'M'])('should render properly with %p size', (size: Props['size']) => {
        const { container } = render(<Button size={size}>Flat Button</Button>);
        expect(container).toMatchSnapshot();
    });

    test.each(['square', 'rounded', 'circle'])('should render properly with %p edges', (edges: Props['edges']) => {
        const { container } = render(<Button edges={edges}>Flat Button</Button>);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with circle edges and S size', () => {
        const { container } = render(
            <Button edges="circle" size="S">
                Flat Button
            </Button>
        );
        expect(container.querySelector('button')).toHaveStyle(`
            padding: 1.4rem
        `);
    });

    it('should render properly with any icon at the beginning of the text', () => {
        const { container } = render(
            <Button variant="solid">
                <AddIcon />
                Solid Button
            </Button>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly with any icon at the end of the text', () => {
        const { container } = render(
            <Button variant="solid">
                <AddIcon />
                Solid Button
            </Button>
        );
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

    it('should render with 100% width if fullWidth prop is truthy', () => {
        const { container } = render(
            <Button fullWidth variant="solid">
                Some text
            </Button>
        );
        expect(container.querySelector('button')).toHaveStyle(`width: 100%`);
    });
});
