import { cleanup, fireEvent, render } from '@test-utils';
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
        label: 'Tata'
    }
];

describe('CheckboxGroup component', () => {
    afterEach(cleanup);

    it('should render correctly with all the props', () => {
        const { container } = render(<CheckboxGroup fullWidth disabled onChange={jest.fn()} label="Cars" options={options} />);
        expect(container).toMatchSnapshot();
    });

    it('should deselect option when it is already selected', () => {
        const mockOnChange = jest.fn(),
            { getByText } = render(<CheckboxGroup values={['hyundai']} onChange={mockOnChange} label="Cars" options={options} />);
        fireEvent.click(getByText('Hyundai'));
        expect(mockOnChange).toHaveBeenCalledWith([]);
    });

    it('should select option when click on it', () => {
        const mockOnChange = jest.fn(),
            { getByText } = render(<CheckboxGroup onChange={mockOnChange} label="Cars" options={options} />);
        fireEvent.click(getByText('Hyundai'));
        expect(mockOnChange).toHaveBeenCalledWith(['hyundai']);
    });

    it('should select all when clicked on the select all option', () => {
        const mockOnChange = jest.fn(),
            { getByText } = render(
                <CheckboxGroup showSelectAll values={['hyundai']} onChange={mockOnChange} label="Cars" options={options} />
            );
        fireEvent.click(getByText('Cars'));
        expect(mockOnChange).toHaveBeenCalledWith(['hyundai', 'honda', 'jaguar', 'landRover']);
    });

    it('should unselect all when all the options are already selected', () => {
        const mockOnChange = jest.fn(),
            { getByText } = render(
                <CheckboxGroup
                    showSelectAll
                    values={['honda', 'hyundai', 'jaguar', 'landRover']}
                    onChange={mockOnChange}
                    label="Cars"
                    options={options}
                />
            );
        fireEvent.click(getByText('Cars'));
        expect(mockOnChange).toHaveBeenCalledWith([]);
    });

    describe('nested options', () => {
        it('should select option when click on it', () => {
            const mockOnChange = jest.fn(),
                { getByText } = render(<CheckboxGroup onChange={mockOnChange} label="Cars" options={options} />);
            fireEvent.click(getByText('Jaguar'));
            expect(mockOnChange).toHaveBeenCalledWith(['jaguar']);
        });

        it('should select all nested options when clicked on the group label', () => {
            const mockOnChange = jest.fn(),
                { getByText } = render(<CheckboxGroup showSelectAll onChange={mockOnChange} label="Cars" options={options} />);
            fireEvent.click(getByText('Tata'));
            expect(mockOnChange).toHaveBeenCalledWith(['jaguar', 'landRover']);
        });

        it('should unselect all when all the options are already selected', () => {
            const mockOnChange = jest.fn(),
                { getByText } = render(
                    <CheckboxGroup showSelectAll values={['jaguar', 'landRover']} onChange={mockOnChange} label="Cars" options={options} />
                );
            fireEvent.click(getByText('Tata'));
            expect(mockOnChange).toHaveBeenCalledWith([]);
        });
    });
});
