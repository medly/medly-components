import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { RadioGroup } from './RadioGroup';

describe('Radio Group', () => {
    afterEach(cleanup);

    it('should render correctly', () => {
        const { container } = render(
            <RadioGroup
                disabled
                fullWidth
                label="Gender"
                name="gender"
                value="female"
                options={[
                    { value: 'female', label: 'Female' },
                    { value: 'male', label: 'Male' }
                ]}
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should call onChange prop with selected option', () => {
        const mockOnChange = jest.fn();

        const { container, getByText } = render(
            <RadioGroup
                label="Gender"
                name="gender"
                onChange={mockOnChange}
                value="female"
                required
                size="M"
                labelPosition="top"
                options={[
                    { value: 'female', label: 'Female' },
                    { value: 'male', label: 'Male' }
                ]}
            />
        );
        fireEvent.click(getByText('Male'));
        expect(mockOnChange).toBeCalledWith('male');
        expect(container).toMatchSnapshot();
    });
});
