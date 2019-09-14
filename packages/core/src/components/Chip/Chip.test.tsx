import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Chip from './Chip';

describe('Chip component', () => {
    afterEach(TestUtils.cleanup);

    it('should render properly with flat variant', () => {
        const { container } = TestUtils.render(<Chip variant="flat" color="yellow" label="Flat Chip" />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with outlined variant', () => {
        const { container } = TestUtils.render(<Chip variant="outlined" color="secondary" label="Outlined Chip" />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with solid variant', () => {
        const { container } = TestUtils.render(<Chip variant="solid" label="Solid Chip" />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly when it is disabled', () => {
        const { container } = TestUtils.render(<Chip disabled variant="solid" label="Solid Chip" />);
        expect(container).toMatchSnapshot();
    });

    test.each([true, false])('should handle on click when chip is disabled: %p', (disabled: boolean) => {
        const mockOnClick = jest.fn();

        const { getByText } = TestUtils.render(
            <Chip disabled={disabled} variant="flat" color="yellow" onClick={mockOnClick} label="Flat Chip" />
        );
        TestUtils.fireEvent.click(getByText('Flat Chip'));
        expect(mockOnClick).toHaveBeenCalledTimes(disabled ? 0 : 1);
    });

    test.each([true, false])('should handle on delete when chip is disabled: %p', (disabled: boolean) => {
        const mockOnClick = jest.fn(),
            mockOnDelete = jest.fn();

        const { container } = TestUtils.render(
            <Chip disabled={disabled} variant="flat" onClick={mockOnClick} onDelete={mockOnDelete} color="yellow" label="Flat Chip" />
        );
        TestUtils.fireEvent.click(container.querySelector('svg'));
        expect(mockOnDelete).toHaveBeenCalledTimes(disabled ? 0 : 1);
        expect(mockOnClick).not.toBeCalled();
    });
});
