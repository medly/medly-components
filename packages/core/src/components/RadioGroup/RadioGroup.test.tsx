import { fireEvent, render, screen } from '@test-utils';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { RadioGroup } from './RadioGroup';

const renderer = ({
    label = 'Gender',
    name = 'gender',
    helperText = 'Helper Text',
    errorText = undefined,
    onChange = jest.fn(),
    required = false,
    validator = undefined,
    onInvalid = jest.fn(),
    disabled = false,
    options = [
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' }
    ]
}) => render(<RadioGroup {...{ required, disabled, label, name, onInvalid, validator, helperText, options, errorText, onChange }} />);

describe('Radio Group', () => {
    it('should render properly', () => {
        const { container } = renderer({});
        expect(container).toMatchSnapshot();
    });

    it('should render disabled state properly', () => {
        const { container } = renderer({ disabled: true });
        expect(container).toMatchSnapshot();
    });

    it('should be able to render error text', () => {
        renderer({ errorText: 'Something went wrong' });
        const errorText = screen.getByText('Something went wrong');
        expect(errorText).toBeInTheDocument();
        expect(errorText).toHaveStyle(`color: rgb(204, 0, 0)`);
    });

    it('should call onChange prop with selected option', () => {
        const mockOnChange = jest.fn();
        renderer({ onChange: mockOnChange });
        userEvent.click(screen.getByText('Male'));
        expect(mockOnChange).toBeCalledWith('male');
    });

    it('should show the html5 form validation error', async () => {
        renderer({ required: true });
        fireEvent.invalid(screen.getByRole('radio', { name: 'Female' }));
        expect(screen.getByText('Constraints not satisfied')).toBeInTheDocument();
    });

    it('should call the validator function if provided', async () => {
        const mockOnInvalid = jest.fn();
        renderer({ onInvalid: mockOnInvalid, validator: (val: string) => (!val ? 'Please select any one gender' : '') });
        fireEvent.invalid(screen.getByRole('radio', { name: 'Female' }));
        expect(screen.getByText('Please select any one gender')).toBeInTheDocument();
        expect(mockOnInvalid).toBeCalled();
    });
});
