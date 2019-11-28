import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Radio from '../Radio';
import { RadioGroup } from './RadioGroup';

describe('Radio Group', () => {
    afterEach(TestUtils.cleanup);

    it('should render correctly', () => {
        const { container } = TestUtils.render(
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

        const { container, getByText } = TestUtils.render(
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
        TestUtils.fireEvent.click(getByText('Male'));
        expect(mockOnChange).toBeCalledWith('male');
        expect(container).toMatchSnapshot();
    });
});
