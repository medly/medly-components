import { CheckIcon } from '@medly-components/icons';
import { fireEvent, render } from '@test-utils';
import React from 'react';
import { TextField } from './TextField';
import { Props } from './types';

describe('TextField', () => {
    it('should render properly with default props', () => {
        const { container } = render(<TextField label="Name" />);
        expect(container).toMatchSnapshot();
    });

    it('should take parents width if we pass fullWidth prop as true', () => {
        const { container } = render(<TextField label="Name" fullWidth />);
        expect(container.querySelector('div')).toHaveStyle(`
            display: flex;
        `);
        expect(container.querySelector('input')).toHaveStyle(`
            width: 100%;
        `);
    });

    it('should render asterisk if we pass required prop as true', () => {
        const { container } = render(<TextField label="Name" required />);
        expect(container.querySelector('label')).toMatchSnapshot();
    });

    describe.each(['outlined', 'filled'])('with %s variant', (variant: Props['variant']) => {
        it('should render default state properly', () => {
            const { container } = render(<TextField variant={variant} label="Name" />);
            expect(container).toMatchSnapshot();
        });

        it('should render focus state properly ', () => {
            const { container } = render(<TextField variant={variant} label="Name" />);
            fireEvent.focusIn(container.querySelector('input'));
            expect(container).toMatchSnapshot();
        });

        it('should render error state properly ', () => {
            const { container } = render(<TextField variant={variant} label="Name" errorText="Something wen wrong" />);
            expect(container).toMatchSnapshot();
        });

        it('should render helper text properly', () => {
            const { container } = render(<TextField variant={variant} label="Name" helperText="Some text" />);
            expect(container.querySelector('span')).toMatchSnapshot();
        });

        it('should render error text properly', () => {
            const { container } = render(<TextField variant={variant} label="Name" errorText="Some text" />);
            expect(container.querySelector('span')).toMatchSnapshot();
        });

        it('should render properly with prefix', () => {
            const { container } = render(<TextField variant={variant} label="Name" prefix={CheckIcon} />);
            expect(container).toMatchSnapshot();
        });

        it('should render properly with suffix', () => {
            const { container } = render(<TextField variant={variant} label="Name" suffix={CheckIcon} />);
            expect(container).toMatchSnapshot();
        });
    });
});
