import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Radio from '../Radio';
import { RadioGroup } from './RadioGroup';

describe('Radio Group', () => {
    afterEach(TestUtils.cleanup);

    it('should render correctly', () => {
        const { container } = TestUtils.render(
            <RadioGroup label="Gender" name="gender" defaultChecked="female">
                <Radio value="female" label="Female" />
                <Radio value="male" label="Male" />
            </RadioGroup>
        );
        expect(container).toMatchSnapshot();
    });

    it('should call onChange prop with selected option', () => {
        const mockOnChange = jest.fn();

        const { container, getByText } = TestUtils.render(
            <RadioGroup label="Gender" name="gender" onChange={mockOnChange} defaultChecked="female" required size="M" labelPosition="top">
                <Radio value="female" label="Female" />
                <Radio value="male" label="Male" />
            </RadioGroup>
        );
        TestUtils.fireEvent.click(getByText('Male'));
        expect(mockOnChange).toBeCalledWith('male');
        expect(container).toMatchSnapshot();
    });
});
