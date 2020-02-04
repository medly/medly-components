import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { MultiSelect } from './MultiSelect';

describe('MultiSelect component', () => {
    afterEach(cleanup);
    const options = [
        { value: 'all', label: 'All' },
        { value: 'Dummy1', label: 'Dummy1' },
        {
            label: 'Nested Options',
            value: [
                { value: 'Dummy2', label: 'Dummy2' },
                { value: 'Dummy3', label: 'Dummy3' }
            ]
        }
    ];

    describe.each([true, false])('with checkbox %p', showCheckbox => {
        afterEach(cleanup);

        it('should render correctly with default props', () => {
            const mockOnChange = jest.fn(),
                { container } = render(<MultiSelect showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />);
            expect(container).toMatchSnapshot();
        });

        it('should render correctly with all the props given', () => {
            const mockOnChange = jest.fn(),
                { container } = render(
                    <MultiSelect
                        disabled
                        minWidth={300}
                        options={options}
                        onChange={mockOnChange}
                        showChips
                        showCheckbox={showCheckbox}
                        values={['all']}
                        labelPosition="left"
                        fullWidth
                        label="Pharmacy"
                        description="We will show reports based on Pharmacy"
                        descriptionColor="grey"
                        placeholder="Please Select"
                    />
                );
            expect(container).toMatchSnapshot();
        });

        it('should show options on click on input', () => {
            const mockOnChange = jest.fn(),
                { container } = render(<MultiSelect showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />);
            const inputEl = container.querySelector('#medly-multiSelect-input');
            fireEvent.click(inputEl);
            expect(container.querySelector('#medly-multiSelect-popover')).toBeVisible();
        });

        it('should hide options when clicked outside', () => {
            const mockOnChange = jest.fn(),
                { container, getByText } = render(
                    <div>
                        <p>Outer Element</p>
                        <MultiSelect showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />
                    </div>
                );
            const inputEl = container.querySelector('#medly-multiSelect-input');
            fireEvent.click(inputEl);
            fireEvent.click(getByText('Outer Element'));
            expect(container.querySelector('#medly-multiSelect-popover')).toBeNull();
        });

        it('should not render options when clicked outside', () => {
            const mockOnChange = jest.fn(),
                { container, getByText } = render(
                    <div>
                        <p>Outer Element</p>
                        <MultiSelect showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />
                    </div>
                );
            fireEvent.click(getByText('Outer Element'));
            expect(container.querySelector('#medly-multiSelect-popover')).toBeNull();
        });

        it('should call onChange prop on selecting one of the prop', () => {
            const mockOnChange = jest.fn(),
                { container, getByText } = render(<MultiSelect showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />),
                inputEl = container.querySelector('#medly-multiSelect-input');
            fireEvent.click(inputEl);
            fireEvent.click(getByText('Dummy1'));
            expect(mockOnChange).toHaveBeenCalledWith(['Dummy1']);
        });

        it('should deselect on click of already selected option', () => {
            const mockOnChange = jest.fn(),
                { container, getAllByText } = render(
                    <MultiSelect values={['Dummy1', 'Dummy2']} showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />
                ),
                inputEl = container.querySelector('#medly-multiSelect-input');
            fireEvent.click(inputEl);
            fireEvent.click(getAllByText('Dummy1')[1]);
            expect(mockOnChange).toHaveBeenCalledWith(['Dummy2']);
        });

        it('should handle group name click as expected', () => {
            const mockOnChange = jest.fn(),
                { container, getByText, getAllByText } = render(
                    <div>
                        <p>Outer Element</p>
                        <MultiSelect values={['Dummy2']} showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />
                    </div>
                );
            const inputEl = container.querySelector('#medly-multiSelect-input');
            fireEvent.click(inputEl);
            fireEvent.click(getByText('Nested Options'));
            expect(getAllByText('Dummy2').length).toEqual(2);
            expect(getAllByText('Dummy3').length).toEqual(showCheckbox ? 2 : 1);
            fireEvent.click(getByText('Nested Options'));
            expect(getAllByText('Dummy2').length).toEqual(showCheckbox ? 1 : 2);
            expect(getAllByText('Dummy3').length).toEqual(1);
        });

        it('should call onChange prop with expected selected values after deleting one of the chip', () => {
            const mockOnChange = jest.fn(),
                { container } = render(
                    <MultiSelect
                        showChips
                        showCheckbox={showCheckbox}
                        values={['Dummy1', 'Dummy2']}
                        options={options}
                        onChange={mockOnChange}
                    />
                );
            fireEvent.click(container.querySelectorAll('svg')[0]);
            expect(mockOnChange).toHaveBeenCalledWith(['Dummy2']);
        });

        it('should render only matched options when input value changed', async () => {
            const mockOnChange = jest.fn(),
                { queryByText, container } = render(<MultiSelect showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />),
                inputEl = container.querySelector('#medly-multiSelect-input');
            fireEvent.click(inputEl);
            fireEvent.change(inputEl, { target: { value: 'Dummy2' } });
            expect(queryByText('Dummy2')).toBeVisible();
            expect(queryByText('Dummy1')).toBeNull();
        });

        it('should render all the options when input value is not matched to any option', async () => {
            const mockOnChange = jest.fn(),
                { queryByText, container } = render(<MultiSelect showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />),
                inputEl = container.querySelector('#medly-multiSelect-input');
            fireEvent.click(inputEl);
            fireEvent.change(inputEl, { target: { value: 'Hello' } });
            expect(queryByText('All')).toBeVisible();
            expect(queryByText('Dummy1')).toBeVisible();
            expect(queryByText('Dummy2')).toBeVisible();
            expect(queryByText('Dummy3')).toBeVisible();
        });

        it('should close options when clicked outside', async () => {
            const mockOnChange = jest.fn(),
                { container, getByText } = render(
                    <>
                        <p>Outer</p>
                        <MultiSelect showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />
                    </>
                ),
                inputEl = container.querySelector('#medly-multiSelect-input'),
                outer = getByText('Outer');
            fireEvent.click(inputEl);
            fireEvent.click(outer);
            expect(container.querySelector('#medly-multiSelect-popover')).toBeNull();
        });
    });
});
