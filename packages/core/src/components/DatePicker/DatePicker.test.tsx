import { TestUtils } from '@medly-components/utils';
import React from 'react';
import { DatePicker } from './DatePicker';

describe('DatePicker component', () => {
    afterEach(TestUtils.cleanup);

    it('should render properly when value is null', () => {
        const { container } = TestUtils.render(
                <DatePicker disabled label="Start Date" value={null} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
            ),
            inputEl = container.querySelector('#medly-datepicker-input') as HTMLInputElement;
        expect(inputEl.value).toEqual('');
    });

    it('should render properly when value is of date type', () => {
        const { container } = TestUtils.render(
                <DatePicker disabled label="Start Date" value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
            ),
            inputEl = container.querySelector('#medly-datepicker-input') as HTMLInputElement;
        expect(inputEl.value).toEqual('01/01/2020');
        expect(container).toMatchSnapshot();
    });

    it('should render properly when value is of string type', () => {
        const { container } = TestUtils.render(
                <DatePicker disabled label="Start Date" value="01/01/2020" displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
            ),
            inputEl = container.querySelector('#medly-datepicker-input') as HTMLInputElement;
        expect(inputEl.value).toEqual('01/01/2020');
        expect(container).toMatchSnapshot();
    });

    it('should render input as read only', () => {
        const { container } = TestUtils.render(
            <DatePicker disabled label="Start Date" value="01/01/2020" displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
        );
        const inputEl = container.querySelector('#medly-datepicker-input') as HTMLInputElement;
        TestUtils.fireEvent.change(inputEl, { target: { value: 'Dummy' } });
        expect(inputEl.value).toEqual('01/01/2020');
    });

    it('should show calendar on click on input', () => {
        const { container } = TestUtils.render(<DatePicker value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />);
        TestUtils.fireEvent.click(container.querySelector('input'));
        expect(container.querySelector('#medly-datepicker-popover')).toBeVisible();
    });

    it('should hide calendar on click outside of the component', async () => {
        const { container, getByText } = TestUtils.render(
            <>
                <div>sibling</div>
                <DatePicker value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
            </>
        );
        TestUtils.fireEvent.click(container.querySelector('input'));
        expect(container.querySelector('#medly-datepicker-popover')).toBeVisible();
        TestUtils.fireEvent.click(getByText('sibling'));
        await TestUtils.wait(() => expect(container.querySelector('#medly-datepicker-popover')).not.toBeVisible());
    });

    it('should call onChange on selecting date', async () => {
        const mockOnChange = jest.fn(),
            dateToSelect = new Date(2020, 0, 2),
            { getByTitle } = TestUtils.render(
                <DatePicker value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={mockOnChange} />
            );

        TestUtils.fireEvent.click(getByTitle(dateToSelect.toDateString()));
        expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
    });
});
