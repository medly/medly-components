import { cleanup, fireEvent, render, screen, waitFor } from '@test-utils';
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
                        showCheckbox={showCheckbox}
                        values={['all']}
                        fullWidth
                        label="Pharmacy"
                        placeholder="Please Select"
                    />
                );
            expect(container).toMatchSnapshot();
        });

        it('should show options on click on input', async () => {
            render(<MultiSelect showCheckbox={showCheckbox} options={options} onChange={jest.fn()} />);
            fireEvent.click(screen.getByRole('textbox'));
            waitFor(() => expect(screen.getByRole('list')).toBeVisible());
        });

        it('should hide options when clicked outside', () => {
            const mockOnChange = jest.fn();
            render(
                <div>
                    <p>Outer Element</p>
                    <MultiSelect showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />
                </div>
            );
            fireEvent.click(screen.getByRole('textbox'));
            expect(screen.getByRole('list')).toBeVisible();
            fireEvent.click(screen.getByText('Outer Element'));
            expect(screen.queryByRole('list')).toBeNull();
        });

        it('should not render options when clicked outside', () => {
            const mockOnChange = jest.fn();
            render(
                <div>
                    <p>Outer Element</p>
                    <MultiSelect showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />
                </div>
            );
            fireEvent.click(screen.getByText('Outer Element'));
            expect(screen.queryByRole('list')).toBeNull();
        });

        it('should call onChange prop on selecting one of the option', () => {
            const mockOnChange = jest.fn();
            render(<MultiSelect showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />);
            fireEvent.click(screen.getByRole('textbox'));
            fireEvent.click(screen.getByText('Dummy1'));
            expect(mockOnChange).toHaveBeenCalledWith(['Dummy1']);
        });

        it('should deselect on click of already selected option', () => {
            const mockOnChange = jest.fn(),
                { getAllByText } = render(
                    <MultiSelect values={['Dummy1', 'Dummy2']} showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />
                );
            fireEvent.click(screen.getByRole('textbox'));
            fireEvent.click(getAllByText('Dummy1')[1]);
            expect(mockOnChange).toHaveBeenCalledWith(['Dummy2']);
        });

        it('should handle group name click as expected', () => {
            const mockOnChange = jest.fn(),
                { getByText, getAllByText } = render(
                    <div>
                        <p>Outer Element</p>
                        <MultiSelect values={['Dummy2']} showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />
                    </div>
                );
            fireEvent.click(screen.getByRole('textbox'));
            fireEvent.click(getByText('Nested Options'));
            expect(getAllByText('Dummy2').length).toEqual(2);
            fireEvent.click(getByText('Nested Options'));
            expect(getAllByText('Dummy3').length).toEqual(1);
        });

        it('should render only matched options when input value changed', async () => {
            const mockOnChange = jest.fn(),
                { queryByText } = render(<MultiSelect showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />),
                inputEl = screen.getByRole('textbox');
            fireEvent.click(inputEl);
            fireEvent.change(inputEl, { target: { value: 'Dummy2' } });
            expect(queryByText('Dummy2')).toBeVisible();
            expect(queryByText('Dummy1')).toBeNull();
        });

        it('should render all the options when input value is not matched to any option', async () => {
            const mockOnChange = jest.fn(),
                { queryByText } = render(<MultiSelect showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />),
                inputEl = screen.getByRole('textbox');
            fireEvent.click(inputEl);
            fireEvent.change(inputEl, { target: { value: 'Hello' } });
            expect(queryByText('All')).toBeVisible();
            expect(queryByText('Dummy1')).toBeVisible();
            expect(queryByText('Dummy2')).toBeVisible();
            expect(queryByText('Dummy3')).toBeVisible();
        });

        it('should close options when clicked outside', async () => {
            const mockOnChange = jest.fn(),
                { getByText } = render(
                    <>
                        <p>Outer</p>
                        <MultiSelect showCheckbox={showCheckbox} options={options} onChange={mockOnChange} />
                    </>
                ),
                outer = getByText('Outer');
            fireEvent.click(screen.getByRole('textbox'));
            fireEvent.click(outer);
            expect(screen.queryByRole('list')).toBeNull();
        });
    });

    it('should clear options on click onClear function', () => {
        const { queryByTestId } = render(<MultiSelect values={['Dummy1', 'Dummy2']} options={options} onChange={jest.fn()} />);
        fireEvent.click(queryByTestId('cancel-chip'));
        expect(screen.queryByRole('list')).toBeNull();
    });

    it('should show options on input change', () => {
        render(<MultiSelect options={options} />);
        const input = document.getElementById('medly-multiSelect-input');
        fireEvent.change(input, { target: { value: 'Dummy2' } });
        expect(screen.queryByRole('list')).toBeVisible();
    });

    it('should not show options if options are hidden', () => {
        render(<MultiSelect id="multiSelect" options={options} disabled={false} />);
        const wrapper = document.getElementById('multiSelect-wrapper');
        const input = document.getElementById('multiSelect-input');
        fireEvent.change(input, { target: { value: 'Dummy2' } });
        fireEvent.click(wrapper);
        expect(screen.queryByRole('list')).toBeNull();
    });

    it('should maintain focus even on blur of input', async () => {
        render(<MultiSelect options={options} />);
        const input = document.getElementById('medly-multiSelect-input');
        fireEvent.change(input, { target: { value: 'Dummy' } });
        fireEvent.click(document.getElementById('Dummy1-wrapper'));
        expect(input).toBe(document.activeElement);
    });

    it('should make input required if options.length is zero and multiSelect is required', async () => {
        const { container, findByText } = render(
            <MultiSelect id="pharmacy" values={[]} options={options} onChange={jest.fn()} required={true} />
        );
        fireEvent.invalid(container.querySelector('input'));
        const message = await findByText('Please select at least one option.');
        expect(message).toBeInTheDocument();
    });

    it('should render with passed error text', async () => {
        const { container, findByText } = render(
            <MultiSelect options={options} values={['Dummy1']} onChange={jest.fn()} errorText="some error" />
        );
        fireEvent.invalid(container.querySelector('input'));
        const message = await findByText('some error');
        expect(message).toBeInTheDocument();
    });

    it('should make input read-only when required is false along with isSearchable', () => {
        const { container } = render(<MultiSelect options={options} isSearchable={false} required={false} />);
        const input = container.querySelector('input');
        fireEvent.focus(input);
        expect(input).not.toBe(document.activeElement);
    });

    it('should call validator with error message', async () => {
        const validatorMock = (val: any[]) => (val.length === 0 ? 'error' : '');
        const { container, findByText } = render(<MultiSelect options={options} validator={validatorMock} />);
        const input = container.querySelector('input');
        fireEvent.focus(input);
        fireEvent.blur(document.getElementById('medly-multiSelect-wrapper'));
        const message = await findByText('error');
        expect(message).toBeInTheDocument();
    });

    it('should call validator on option click if validator is passed', () => {
        const validatorMock = jest.fn();
        const { getByText, getByRole } = render(<MultiSelect options={options} validator={validatorMock} />);
        fireEvent.click(getByRole('textbox'));
        fireEvent.click(getByText('Dummy1'));
        expect(validatorMock).toHaveBeenCalledWith(['Dummy1']);
    });
});
