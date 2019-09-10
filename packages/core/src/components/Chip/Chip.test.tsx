import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Chip from './Chip';

describe('Chip component', () => {
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

    it('should call onClick when click on it', () => {
        const mockOnClick = jest.fn();

        const { getByText } = TestUtils.render(<Chip variant="flat" color="yellow" onClick={mockOnClick} label="Flat Chip" />);
        TestUtils.fireEvent.click(getByText('Flat Chip'));
        expect(mockOnClick).not.toBeCalled();
    });

    it('should call onDelete when click on clear icon', () => {
        const mockOnClick = jest.fn(),
            mockOnDelete = jest.fn();

        const { container } = TestUtils.render(
            <Chip variant="flat" onClick={mockOnClick} onDelete={mockOnDelete} color="yellow" label="Flat Chip" />
        );
        TestUtils.fireEvent.click(container.querySelector('svg'));
        expect(mockOnDelete).toBeCalled();
        expect(mockOnClick).not.toBeCalled();
    });
});
