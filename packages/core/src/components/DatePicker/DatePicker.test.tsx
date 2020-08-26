import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { DatePicker } from './DatePicker';

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
        const { container } = render(<DatePicker value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />);
        fireEvent.click(container.querySelector('svg'));
        expect(container.querySelector('#medly-datepicker-calendar')).toBeVisible();
        fireEvent.blur(container.querySelector('input'));
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
        it('should return error message for incorrect month', () => {});
        it('should return error message for incorrect day', () => {});
        it('should not return error message for valid input', () => {});
    });
});
