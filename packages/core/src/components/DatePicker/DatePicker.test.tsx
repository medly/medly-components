import { cleanup, fireEvent, render, waitFor } from '@test-utils';
import { DatePickerProps } from 'packages/forms/src/components/Fields/types';
import React from 'react';
import { DatePicker } from './DatePicker';

describe('DatePicker component', () => {
    afterEach(cleanup);

    it('should render properly when value is null', () => {
        const { container } = render(
                <DatePicker id="dob" disabled label="Start Date" value={null} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
            ),
            inputEl = container.querySelector('#dob-input') as HTMLInputElement;
        expect(inputEl.value).toEqual('');
    });

    it('should render properly when value is of date type', () => {
        const { container } = render(
                <DatePicker
                    id="dob"
                    disabled
                    label="Start Date"
                    value={new Date(2020, 0, 1)}
                    displayFormat="MM/dd/yyyy"
                    onChange={jest.fn()}
                />
            ),
            inputEl = container.querySelector('#dob-input') as HTMLInputElement;
        expect(inputEl.value).toEqual('01 / 01 / 2020');
        expect(container).toMatchSnapshot();
    });

    it('should render properly when value is of string type', () => {
        const { container } = render(
                <DatePicker
                    id="dob"
                    disabled
                    label="Start Date"
                    value="01/01/2020"
                    displayFormat="MM/dd/yyyy"
                    onChange={jest.fn()}
                    minSelectableDate={new Date(2010, 0, 1)}
                    maxSelectableDate={new Date(2030, 2, 1)}
                />
            ),
            inputEl = container.querySelector('#dob-input') as HTMLInputElement;
        expect(inputEl.value).toEqual('01 / 01 / 2020');
        expect(container).toMatchSnapshot();
    });

    it('should show calendar on click on icon', () => {
        const { container } = render(<DatePicker id="dob" value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />);
        fireEvent.click(container.querySelector('svg'));
        expect(container.querySelector('#dob-calendar')).toBeVisible();
    });

    it('should hide calendar on click outside of the component', async () => {
        const { container, getByText } = render(
            <>
                <p>Click Here</p>
                <DatePicker id="dob" value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
            </>
        );
        fireEvent.click(container.querySelector('svg'));
        expect(container.querySelector('#dob-calendar')).toBeVisible();
        fireEvent.click(getByText('Click Here'));
        expect(container.querySelector('#dob-calendar')).toBeNull();
    });

    it('should call onChange on selecting date', async () => {
        const mockOnChange = jest.fn(),
            dateToSelect = new Date(2020, 0, 2),
            { container, getByTitle } = render(
                <DatePicker id="dob" value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={mockOnChange} />
            );
        fireEvent.click(container.querySelector('svg'));
        fireEvent.click(getByTitle(dateToSelect.toDateString()));
        expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
    });
    describe('error messages', () => {
        const props: DatePickerProps = {
            value: null,
            displayFormat: 'MM/dd/yyyy',
            type: 'date',
            onChange: jest.fn()
        };
        const renderComponent = (required?: boolean) => {
            const { container, getByText } = render(<DatePicker id="dob" {...props} required={required} />);
            const inputEl = container.querySelector('input');
            return {
                inputEl,
                getByText
            };
        };

        it('should return error when value is empty and field is required', async () => {
            const { inputEl, getByText } = renderComponent(true);
            fireEvent.invalid(inputEl);
            await waitFor(() => expect(getByText('Constraints not satisfied')).toBeInTheDocument());
        });

        it('should return error message if date entered is incomplete', () => {
            const { inputEl, getByText } = renderComponent(true);
            fireEvent.change(inputEl, { target: { value: '04/31' } });
            fireEvent.blur(inputEl);
            expect(getByText('Enter valid date')).toBeInTheDocument();
        });
    });

    describe('Handlers', () => {
        it('should call focus and blur handlers if passed', () => {
            const mockOnFocus = jest.fn(),
                mockOnChange = jest.fn(),
                mockOnBlur = jest.fn(),
                { container } = render(
                    <DatePicker
                        id="dob"
                        value={new Date(2020, 0, 1)}
                        displayFormat="MM/dd/yyyy"
                        onChange={mockOnChange}
                        onFocus={mockOnFocus}
                        onBlur={mockOnBlur}
                    />
                ),
                inputEl = container.querySelector('#dob-input') as HTMLInputElement;
            fireEvent.click(container.querySelector('svg'));
            expect(mockOnFocus).toHaveBeenCalled();
            fireEvent.blur(inputEl);
            expect(mockOnBlur).toHaveBeenCalled();
        });

        it('should call invalid handler if passed', () => {
            const mockOnInvalid = jest.fn(),
                mockOnChange = jest.fn(),
                { container } = render(
                    <DatePicker
                        id="dob"
                        value={new Date(2020, 0, 1)}
                        displayFormat="MM/dd/yyyy"
                        onChange={mockOnChange}
                        onInvalid={mockOnInvalid}
                    />
                ),
                inputEl = container.querySelector('#dob-input') as HTMLInputElement;
            fireEvent.click(container.querySelector('svg'));
            fireEvent.invalid(inputEl);
            expect(mockOnInvalid).toHaveBeenCalled();
        });
    });

    describe('Styles', () => {
        it('should change the margin and width if full-width is passed as prop', () => {
            const { container } = render(
                <DatePicker id="dob" value={null} displayFormat="MM/dd/yyyy" onChange={jest.fn()} fullWidth={true} />
            );
            expect(container.querySelector('#dob-datepicker-wrapper')).toHaveStyle(`width: 100%`);
        });

        it('should change the size of datepicker based on size prop', () => {
            const { container } = render(<DatePicker id="dob" value={null} displayFormat="MM/dd/yyyy" onChange={jest.fn()} size={'S'} />);
            fireEvent.click(container.querySelector('svg'));
            expect(container.querySelector('#dob-calendar')).toHaveStyle(`top: 4rem`);
        });
    });
});
