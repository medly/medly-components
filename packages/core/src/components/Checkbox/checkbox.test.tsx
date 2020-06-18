import { fireEvent, render, screen } from '@test-utils';
import React from 'react';
import { LabelPositions } from '../Label/types';
import { Checkbox } from './Checkbox';

describe('Checkbox component', () => {
    describe.each([true, false])('should render correctly with checked %p', (checked: boolean) => {
        test.each(['indeterminate', 'active', 'disabled', 'hasError'])('and %s state', state => {
            const { container } = render(<Checkbox {...{ [state]: true }} checked={checked} />);
            expect(container).toMatchSnapshot();
        });
    });

    test.each(['left', 'right', 'top', 'bottom'])('should render correctly with %s labelPosition', (labelPosition: LabelPositions) => {
        const { container } = render(<Checkbox label="Dummy" labelPosition={labelPosition} />);
        expect(container).toMatchSnapshot();
    });

    test.each(['top', 'bottom'])('should render properly with fullWidth and %p labelPosition', (labelPosition: LabelPositions) => {
        const { container } = render(<Checkbox id="dummy" fullWidth label="Dummy" labelPosition={labelPosition} />);
        expect(container.querySelector('#dummy-wrapper')).toHaveStyle(`
            display: flex;
            padding: 0.8rem 0
        `);
    });

    it('should call onChange handler on click on checkbox', () => {
        const mockOnChange = jest.fn();
        render(<Checkbox onChange={mockOnChange} label="Dummy" />);
        fireEvent.click(screen.getByRole('checkbox'));
        expect(mockOnChange).toBeCalled();
    });
});
