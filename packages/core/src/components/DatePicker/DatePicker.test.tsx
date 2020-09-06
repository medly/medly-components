import { cleanup, fireEvent, render } from '@test-utils';
import { DatePickerProps } from 'packages/forms/src/components/Fields/types';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { DatePicker } from './DatePicker';

const changeInputMaskValue = (element: any, value: string) => {
    element.value = value;
    element.selectionStart = element.selectionEnd = value.length;
    TestUtils.Simulate.change(element);
};

describe('DatePicker component', () => {
    afterEach(cleanup);

    it('should render properly when value is null', () => {
        const { container } = render(
                <DatePicker disabled label="Start Date" value={null} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
            ),
            inputEl = container.querySelector('#medly-datepicker-input') as HTMLInputElement;
        expect(inputEl.value).toEqual('');
    });

    it('should render properly when value is of date type', () => {
        const { container } = render(
                <DatePicker disabled label="Start Date" value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
            ),
            inputEl = container.querySelector('#medly-datepicker-input') as HTMLInputElement;
        expect(inputEl.value).toEqual('01/01/2020');
        expect(container).toMatchSnapshot();
    });

    it('should render properly when value is of string type', () => {
        const { container } = render(
                <DatePicker
                    disabled
                    label="Start Date"
                    value="01/01/2020"
                    displayFormat="MM/dd/yyyy"
                    onChange={jest.fn()}
                    minSelectableDate={new Date(2010, 0, 1)}
                    maxSelectableDate={new Date(2030, 2, 1)}
                />
            ),
            inputEl = container.querySelector('#medly-datepicker-input') as HTMLInputElement;
        expect(inputEl.value).toEqual('01/01/2020');
        expect(container).toMatchSnapshot();
    });

    it('should render input as read only', () => {
        const { container } = render(
            <DatePicker disabled label="Start Date" value="01/01/2020" displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
        );
        const inputEl = container.querySelector('input') as HTMLInputElement;
        fireEvent.change(inputEl, { target: { value: 'Dummy' } });
        expect(inputEl.value).toEqual('01/01/2020');
    });

    it('should show calendar on click on icon', () => {
        const { container } = render(<DatePicker value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />);
        fireEvent.click(container.querySelector('svg'));
        expect(container.querySelector('#medly-datepicker-calendar')).toBeVisible();
    });

    it('should hide calendar on click outside of the component', async () => {
        const { container, getByText } = render(
            <>
                <p>Click Here</p>
                <DatePicker value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
            </>
        );
        fireEvent.click(container.querySelector('svg'));
        expect(container.querySelector('#medly-datepicker-calendar')).toBeVisible();
        fireEvent.click(getByText('Click Here'));
        expect(container.querySelector('#medly-datepicker-calendar')).toBeNull();
    });

    it('should call onChange on selecting date', async () => {
        const mockOnChange = jest.fn(),
            dateToSelect = new Date(2020, 0, 2),
            { container, getByTitle } = render(
                <DatePicker value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={mockOnChange} />
            );
        fireEvent.click(container.querySelector('svg'));
        fireEvent.click(getByTitle(dateToSelect.toDateString()));
        expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
    });

    describe('error messages', () => {
        const mockOnChange = jest.fn();

        const props: DatePickerProps = {
            value: null,
            displayFormat: 'MM/dd/yyyy',
            type: 'date',
            onChange: mockOnChange
        };

        const renderComponent = (required?: boolean) => {
            const { container, getByText } = render(<DatePicker {...props} required={required} />);
            const inputEl = container.querySelector('input');
            return {
                inputEl,
                getByText
            };
        };

        it('should return error message for incorrect month', () => {
            const { inputEl, getByText } = renderComponent();
            changeInputMaskValue(inputEl, '13');
            expect(inputEl.value).toEqual('13/dd/yyyy');
            expect(getByText('Enter valid Month')).toBeInTheDocument();
        });
        it('should return error message for incorrect day', () => {
            const { inputEl, getByText } = renderComponent();
            changeInputMaskValue(inputEl, '12/33');
            expect(inputEl.value).toEqual('12/33/yyyy');
            expect(getByText('Enter valid Day')).toBeInTheDocument();
        });
        it('should return error message for incorrect day if month is February and day is greater than 28', () => {
            const { inputEl, getByText } = renderComponent();
            changeInputMaskValue(inputEl, '02/29');
            expect(getByText('Enter valid Day')).toBeInTheDocument();
        });
        it('should return error message for incorrect day if month has 30 days and day is greater than 30', () => {
            const { inputEl, getByText } = renderComponent();
            changeInputMaskValue(inputEl, '04/31');
            expect(getByText('Enter valid Day')).toBeInTheDocument();
        });
        it('should return error when value is empty and field is required', () => {
            const { inputEl, getByText } = renderComponent(true);
            fireEvent.invalid(inputEl);
            expect(getByText('Please fill in this field.')).toBeInTheDocument();
        });
        it('should return error message with enter valid date if date entered is incomplete', () => {
            const { inputEl, getByText } = renderComponent(true);
            changeInputMaskValue(inputEl, '04/31');
            TestUtils.Simulate.blur(inputEl);
            expect(getByText('Enter valid date')).toBeInTheDocument();
        });
        it('should not return error message for valid input', () => {
            const { inputEl } = renderComponent();
            changeInputMaskValue(inputEl, '12/31/2020');
            expect(inputEl.value).toEqual('12/31/2020');
            expect(document.getElementById('medly-datepicker-helper-text')).toBeNull();
        });
    });

    describe('Handlers', () => {
        it('should call focus and blur handlers if passed', () => {
            const mockOnFocus = jest.fn(),
                mockOnChange = jest.fn(),
                mockOnBlur = jest.fn(),
                { container } = render(
                    <DatePicker
                        value={new Date(2020, 0, 1)}
                        displayFormat="MM/dd/yyyy"
                        onChange={mockOnChange}
                        onFocus={mockOnFocus}
                        onBlur={mockOnBlur}
                    />
                ),
                inputEl = container.querySelector('#medly-datepicker-input') as HTMLInputElement;
            fireEvent.click(container.querySelector('svg'));
            expect(mockOnFocus).toHaveBeenCalled();
            fireEvent.blur(inputEl);
            expect(mockOnBlur).toHaveBeenCalled();
        });

        it('should call invalid handler if passed', () => {
            const mockOnInvalid = jest.fn(),
                mockOnChange = jest.fn(),
                { container } = render(
                    <DatePicker value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={mockOnChange} onInvalid={mockOnInvalid} />
                ),
                inputEl = container.querySelector('#medly-datepicker-input') as HTMLInputElement;
            fireEvent.click(container.querySelector('svg'));
            fireEvent.invalid(inputEl);
            expect(mockOnInvalid).toHaveBeenCalled();
        });
    });

    describe('Styles', () => {
        it('should change the margin and width if full-width is passed as prop', () => {
            const { container } = render(<DatePicker value={null} displayFormat="MM/dd/yyyy" onChange={jest.fn()} fullWidth={true} />);
            expect(container.querySelector('#medly-datepicker-input-wrapper')).toHaveStyle(`width: 100%`);
        });

        it('should change the size of datepicker based on size prop', () => {
            const { container } = render(
                <DatePicker value={null} displayFormat="MM/dd/yyyy" onChange={jest.fn()} id={'picker'} size={'S'} />
            );
            fireEvent.click(container.querySelector('svg'));
            expect(container.querySelector('#picker-calendar')).toHaveStyle(`top: 4rem`);
        });
    });
});
