import { fireEvent, render, screen } from '@test-utils';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { CheckboxGroup } from './CheckboxGroup';

const options = [
    { value: 'honda', label: 'Honda' },
    { value: 'hyundai', label: 'Hyundai' },
    {
        value: [
            { value: 'jaguar', label: 'Jaguar' },
            { value: 'landRover', label: 'Land Rover' }
        ],
        columns: 2,
        label: 'Tata'
    }
];

describe('CheckboxGroup component', () => {
    it('should deselect option when it is already selected', () => {
        const mockOnChange = jest.fn();
        render(<CheckboxGroup values={['hyundai']} onChange={mockOnChange} label="Cars" options={options} />);
        userEvent.click(screen.getByText('Hyundai'));
        expect(mockOnChange).toHaveBeenCalledWith([]);
    });

    it('should select option when click on it', () => {
        const mockOnChange = jest.fn();
        render(<CheckboxGroup onChange={mockOnChange} label="Cars" options={options} />);
        fireEvent.click(screen.getByText('Hyundai'));
        expect(mockOnChange).toHaveBeenCalledWith(['hyundai']);
    });

    it('should select all when clicked on the select all option', () => {
        const mockOnChange = jest.fn();
        render(<CheckboxGroup showSelectAll values={['hyundai']} onChange={mockOnChange} label="Cars" options={options} />);
        fireEvent.click(screen.getByText('Cars'));
        expect(mockOnChange).toHaveBeenCalledWith(['hyundai', 'honda', 'jaguar', 'landRover']);
    });

    it('should show indeterminate state when any one option is selected but not all', () => {
        const mockOnChange = jest.fn(),
            { container } = render(
                <CheckboxGroup showSelectAll values={['hyundai']} onChange={mockOnChange} label="Cars" options={options} />
            );
        expect(container.querySelector('svg')).toMatchSnapshot();
    });

    it('should unselect all when all the options are already selected', () => {
        const mockOnChange = jest.fn();
        render(
            <CheckboxGroup
                showSelectAll
                values={['honda', 'hyundai', 'jaguar', 'landRover']}
                onChange={mockOnChange}
                label="Cars"
                options={options}
            />
        );
        fireEvent.click(screen.getByText('Cars'));
        expect(mockOnChange).toHaveBeenCalledWith([]);
    });

    it('should render helper text when it is given', () => {
        const { container } = render(
            <CheckboxGroup values={[]} onChange={jest.fn()} label="Cars" helperText="Helper Text" options={options} />
        );
        expect(screen.getByText('Helper Text')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('should render error text when it is given', () => {
        const { container } = render(
            <CheckboxGroup values={[]} onChange={jest.fn()} label="Cars" errorText="Helper Text" options={options} />
        );
        expect(screen.getByText('Helper Text')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('should render properly when it is disabled', () => {
        const { container } = render(
            <CheckboxGroup values={[]} showSelectAll onChange={jest.fn()} helperText="Helper Text" disabled options={options} />
        );
        expect(container).toMatchSnapshot();
    });

    describe('nested options', () => {
        it('should select option when click on it', () => {
            const mockOnChange = jest.fn();
            render(<CheckboxGroup onChange={mockOnChange} label="Cars" options={options} />);
            fireEvent.click(screen.getByText('Jaguar'));
            expect(mockOnChange).toHaveBeenCalledWith(['jaguar']);
        });

        it('should select all nested options when clicked on the group label', () => {
            const mockOnChange = jest.fn();
            render(<CheckboxGroup showSelectAll onChange={mockOnChange} label="Cars" options={options} />);
            fireEvent.click(screen.getByText('Tata'));
            expect(mockOnChange).toHaveBeenCalledWith(['jaguar', 'landRover']);
        });

        it('should unselect all when all the options are already selected', () => {
            const mockOnChange = jest.fn();
            render(<CheckboxGroup showSelectAll values={['jaguar', 'landRover']} onChange={mockOnChange} label="Cars" options={options} />);
            fireEvent.click(screen.getByText('Tata'));
            expect(mockOnChange).toHaveBeenCalledWith([]);
        });
    });
});
