import { render, screen } from '@test-utils';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { LabelPositions } from '../Label/types';
import { Radio } from './Radio';

describe('Radio component', () => {
    describe.each([true, false])('should render correctly with checked %p', (checked: boolean) => {
        test.each(['checked', 'disabled', 'hasError'])('and %s state', state => {
            const { container } = render(<Radio {...{ [state]: true }} checked={checked} value="female" />);
            expect(container).toMatchSnapshot();
        });
    });
    test.each(['left', 'right', 'top', 'bottom'])('should render correctly with %s labelPosition', (labelPosition: LabelPositions) => {
        const { container } = render(<Radio label="Dummy" labelPosition={labelPosition} value="female" />);
        expect(container).toMatchSnapshot();
    });

    test.each(['top', 'bottom'])('should render properly with fullWidth and %p labelPosition', (labelPosition: LabelPositions) => {
        const { container } = render(<Radio id="dummy" fullWidth label="Dummy" labelPosition={labelPosition} />);
        expect(container.querySelector('#dummy-wrapper')).toHaveStyle(`
            display: flex;
            padding: 0.8rem 0
        `);
    });

    it('should call onChange handler on click on checkbox', () => {
        const mockOnChange = jest.fn();
        render(<Radio onChange={mockOnChange} label="Dummy" />);
        userEvent.click(screen.getByRole('radio'));
        expect(mockOnChange).toBeCalled();
    });
});
