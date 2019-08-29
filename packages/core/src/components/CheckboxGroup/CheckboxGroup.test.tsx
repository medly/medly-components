import { TestUtils } from '@medly-components/utils';
import React from 'react';
import CheckboxGroup from './CheckboxGroup';

describe('CheckboxGroup component', () => {
    afterEach(TestUtils.cleanup);

    it('should render correctly with all the props', () => {
        const { container } = TestUtils.render(
            <CheckboxGroup
                value={['apple']}
                onChange={jest.fn()}
                label="Fruits"
                options={[{ value: 'apple', label: 'Apple' }, { value: 'orange', label: 'Orange' }]}
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render correctly when one of the option is selected', () => {
        const mockOnChange = jest.fn(),
            { getByText } = TestUtils.render(
                <CheckboxGroup
                    value={['apple']}
                    onChange={mockOnChange}
                    label="Fruits"
                    options={[{ value: 'apple', label: 'Apple' }, { value: 'orange', label: 'Orange' }]}
                />
            );
        TestUtils.fireEvent.click(getByText('Apple'));
        expect(mockOnChange).toHaveBeenCalledWith([]);
    });

    it('should select all when clicked on the select all option', () => {
        const mockOnChange = jest.fn(),
            { getByText } = TestUtils.render(
                <CheckboxGroup
                    showSelectAll
                    value={['apple']}
                    onChange={mockOnChange}
                    label="Fruits"
                    options={[{ value: 'apple', label: 'Apple' }, { value: 'orange', label: 'Orange' }]}
                />
            );
        TestUtils.fireEvent.click(getByText('Fruits'));
        expect(mockOnChange).toHaveBeenCalledWith(['apple', 'orange']);
    });

    it('should unselect all when all the options are already selected', () => {
        const mockOnChange = jest.fn(),
            { getByText } = TestUtils.render(
                <CheckboxGroup
                    showSelectAll
                    value={['apple', 'orange']}
                    onChange={mockOnChange}
                    label="Fruits"
                    options={[{ value: 'apple', label: 'Apple' }, { value: 'orange', label: 'Orange' }]}
                />
            );
        TestUtils.fireEvent.click(getByText('Fruits'));
        expect(mockOnChange).toHaveBeenCalledWith([]);
    });
});
