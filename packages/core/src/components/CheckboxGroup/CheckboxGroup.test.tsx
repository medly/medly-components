import { TestUtils } from '@medly-components/utils';
import React from 'react';
import CheckboxGroup from './CheckboxGroup';

describe('CheckboxGroup component', () => {
    afterEach(TestUtils.cleanup);

    it('should render correctly with all the props', () => {
        const { container } = TestUtils.render(
            <CheckboxGroup
                onChange={jest.fn()}
                label="Fruits"
                options={[{ value: 'apple', label: 'Apple' }, { value: 'orange', label: 'Orange' }]}
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should deselect option when it is already selected', () => {
        const mockOnChange = jest.fn(),
            { getByText } = TestUtils.render(
                <CheckboxGroup
                    defaultValues={['apple']}
                    onChange={mockOnChange}
                    label="Fruits"
                    options={[{ value: 'apple', label: 'Apple' }, { value: 'orange', label: 'Orange' }]}
                />
            );
        TestUtils.fireEvent.click(getByText('Apple'));
        expect(mockOnChange).toHaveBeenCalledWith([]);
    });

    it('should select option when click on it', () => {
        const mockOnChange = jest.fn(),
            { getByText } = TestUtils.render(
                <CheckboxGroup
                    onChange={mockOnChange}
                    label="Fruits"
                    options={[{ value: 'apple', label: 'Apple' }, { value: 'orange', label: 'Orange' }]}
                />
            );
        TestUtils.fireEvent.click(getByText('Apple'));
        expect(mockOnChange).toHaveBeenCalledWith(['apple']);
    });

    it('should select all when clicked on the select all option', () => {
        const mockOnChange = jest.fn(),
            { getByText } = TestUtils.render(
                <CheckboxGroup
                    showSelectAll
                    defaultValues={['apple']}
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
                    defaultValues={['apple', 'orange']}
                    onChange={mockOnChange}
                    label="Fruits"
                    options={[{ value: 'apple', label: 'Apple' }, { value: 'orange', label: 'Orange' }]}
                />
            );
        TestUtils.fireEvent.click(getByText('Fruits'));
        expect(mockOnChange).toHaveBeenCalledWith([]);
    });
});
