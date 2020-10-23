import { cleanup, fireEvent, render, waitFor } from '@test-utils';
import React from 'react';
import { placements } from '../Popover/Popover.stories';
import { DateRangePicker } from './DateRangePicker';
import { DateRangeProps } from './types';


const renderComponent = (props?: any) => {
    const defaultProps: DateRangeProps = {
        value: { startDate: null, endDate: null },
        displayFormat: 'MM/dd/yyyy',
        id: "contract",
        required: false,
        fromLabel: "From",
        toLabel: "To",
        size: 'M',
        popoverPlacement: 'bottom-start',
        variant: 'filled',
        fullWidth: false,
        disabled: false,
        minSelectableDate: new Date(2020, 1, 1),
        maxSelectableDate: new Date(2022, 2, 15),
        onChange: jest.fn()
    };

    return render(
        <DateRangePicker
            id="contract" {...defaultProps} {...props} />);
};

describe('DateRangePicker', () => {
    afterEach(cleanup);
    it('should render properly when value is of date type', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });

    describe('popover placement', () => {
        test.each(placements)('should render properly with %p position', (popoverPlacement: DateRangeProps['popoverPlacement']) => {
            const { container } = renderComponent({ popoverPlacement });
            fireEvent.click(container.querySelector('svg'));
            expect(container.querySelector('#contract-calendar')).toBeVisible();
            expect(container.querySelector('#contract-calendar')).toMatchSnapshot();
        });
    });

    describe('calendar', () => {
        it('should show calendar on click on icon', () => {
            const { container } = renderComponent();
            fireEvent.click(container.querySelector('svg'));
            expect(container.querySelector('#contract-calendar')).toBeVisible();
        });
        it('should not show calendar on click on icon if is disabled prop is passes', () => {
            const { container } = renderComponent({ disabled: true });
            fireEvent.click(container.querySelector('svg'));
            expect(container.querySelector('#contract-calendar')).toBeNull();
        });

        it('should hide calendar on click outside of the component', async () => {
            const { container, getByText } = render(
                <>
                    <p>Click Here</p>
                    <DateRangePicker
                        id="contract"
                        value={{ startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }}
                        displayFormat="MM/dd/yyyy"
                        onChange={jest.fn()} />
                </>
            );
            fireEvent.click(container.querySelector('svg'));
            expect(container.querySelector('#contract-calendar')).toBeVisible();
            fireEvent.click(getByText('Click Here'));
            expect(container.querySelector('#contract-calendar')).toBeNull();
        });
    });
    describe('on text change', () => {
        it('should change call onChange of from date with expected date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect = { "endDate": new Date("2020-02-01T18:30:00.000Z"), "startDate": new Date("2020-03-01T18:30:00.000Z") },
                { container } = renderComponent({
                    value: { startDate: new Date('01, 02, 2020'), endDate: new Date('02, 02, 2020') },
                    onChange: mockOnChange
                });
            fireEvent.change(container.querySelector('#contract-from-input'), { target: { value: '03 / 02 / 2020' } });
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });
        it('should change call onChange of to date with expected date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect = { "endDate": new Date("2020-03-01T18:30:00.000Z"), "startDate": new Date("2020-01-01T18:30:00.000Z") },
                { container } = renderComponent({
                    value: { startDate: new Date('01, 02, 2020'), endDate: new Date('02, 02, 2020') },
                    onChange: mockOnChange
                });
            fireEvent.change(container.querySelector('#contract-to-input'), { target: { value: '03 / 02 / 2020' } });
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });
        it('should call onChange with null if typed from date is invalid', async () => {
            const mockOnChange = jest.fn(),
                { container } = renderComponent({
                    onChange: mockOnChange
                });
            fireEvent.change(container.querySelector('#contract-from-input'), { target: { value: '01 / 02' } });
            expect(mockOnChange).toHaveBeenCalledTimes(0);
        });
        it('should call onChange with null if typed to date is invalid', async () => {
            const mockOnChange = jest.fn(),
                { container } = renderComponent({ onChange: mockOnChange });
            fireEvent.change(container.querySelector('#contract-to-input'), { target: { value: '01 / 02' } });
            expect(mockOnChange).toHaveBeenCalledTimes(0);
        });
    });
    describe('error messages', () => {


        it('should return error message if FROM date entered is incomplete', async () => {
            const { container, getByText } = renderComponent({ required: true });
            const inputEl = container.querySelector('#contract-from-input')
            fireEvent.change(inputEl, { target: { value: '04/31' } });
            fireEvent.blur(inputEl);
            await waitFor(() => expect(getByText('Enter valid date')).toBeInTheDocument());
        });

        it('should return error message if TO date entered is incomplete', async () => {
            const { container, getByText } = renderComponent({ required: true });
            const inputEl = container.querySelector('#contract-to-input')
            fireEvent.change(inputEl, { target: { value: '04/31' } });
            fireEvent.blur(inputEl);
            await waitFor(() => expect(getByText('Enter valid date')).toBeInTheDocument());
        });
    });
    describe('Handlers', () => {
        it('should call onChange on selecting date', async () => {
            const mockOnChange = jest.fn(),
                dateToSelect = { startDate: new Date(2020, 10, 25) },
                { container, getByTitle } = renderComponent({
                    onChange: mockOnChange
                });
            fireEvent.click(container.querySelector('svg'));
            fireEvent.click(getByTitle(dateToSelect.startDate.toDateString()));
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });

        it('should call focus and blur handlers if passed', () => {
            const mockOnFocus = jest.fn(),
                mockOnChange = jest.fn(),
                mockOnBlur = jest.fn(),
                { container } = renderComponent({
                    value: { startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 1) },
                    onChange: mockOnChange,
                    onFocus: mockOnFocus,
                    onBlur: mockOnBlur
                }),
                inputElFrom = container.querySelector('#contract-from-input') as HTMLInputElement,
                inputElTo = container.querySelector('#contract-to-input') as HTMLInputElement;
            fireEvent.click(container.querySelector('svg'));
            expect(mockOnFocus).toHaveBeenCalled();
            fireEvent.blur(inputElFrom);
            expect(mockOnBlur).toHaveBeenCalled();
            fireEvent.change(inputElFrom, { target: { value: '10 / 14 / 2020' } });
            expect(mockOnChange).toHaveBeenCalled();
            fireEvent.focus(inputElFrom);
            expect(mockOnFocus).toHaveBeenCalled();
            fireEvent.focus(inputElTo);
            expect(mockOnFocus).toHaveBeenCalled();
            fireEvent.blur(inputElTo);
            expect(mockOnBlur).toHaveBeenCalled();
            fireEvent.change(inputElTo, { target: { value: '10 / 18 / 2020' } });
            expect(mockOnChange).toHaveBeenCalled();
        });

        it('focused element should change', () => {
            const mockOnFocus = jest.fn(),
                mockOnChange = jest.fn(),
                mockOnBlur = jest.fn(),
                { container } = renderComponent({
                    onChange: mockOnChange,
                    onFocus: mockOnFocus,
                    onBlur: mockOnBlur
                }),
                inputElFrom = container.querySelector('#contract-from-input') as HTMLInputElement,
                inputElTo = container.querySelector('#contract-to-input') as HTMLInputElement;

            fireEvent.focus(inputElTo);
            expect(mockOnFocus).toHaveBeenCalled();
            fireEvent.blur(inputElTo);
            expect(mockOnBlur).toHaveBeenCalled();
            fireEvent.change(inputElTo, { target: { value: '10 / 18 / 2020' } });
            expect(mockOnChange).toHaveBeenCalled();

            expect(mockOnFocus).toHaveBeenCalled();
            fireEvent.blur(inputElFrom);
            expect(mockOnBlur).toHaveBeenCalled();
            fireEvent.change(inputElFrom, { target: { value: '10 / 14 / 2020' } });
            expect(mockOnChange).toHaveBeenCalled();
            fireEvent.focus(inputElFrom);
            expect(mockOnFocus).toHaveBeenCalled();

        });

        it('should call invalid handler if passed', () => {
            const mockOnInvalid = jest.fn(),
                mockOnChange = jest.fn(),
                { container } = renderComponent({
                    value: { startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 1) },
                    onChange: mockOnChange,
                    onInvalid: mockOnInvalid
                }),
                inputEl = container.querySelector('#contract-from-input') as HTMLInputElement;
            fireEvent.click(container.querySelector('svg'));
            fireEvent.invalid(inputEl);
            expect(mockOnInvalid).toHaveBeenCalled();
        });
    });
    describe('Styles', () => {
        it('should change the margin and width if full-width is passed as prop', () => {
            const { container } = renderComponent({
                value: { startDate: null, endDate: null },
                onChange: jest.fn(),
                fullWidth: true
            });
            expect(container.querySelector('#contract-wrapper')).toHaveStyle(`width: 100%`);
        });

        it('should change the size of DateRangePicker based on size prop', async () => {
            const { container } = renderComponent({
                size: 'S',
                onChange: jest.fn()
            });
            fireEvent.click(container.querySelector('svg'));
            await waitFor(() => expect(container.querySelector('#contract-calendar')).toHaveStyle(`top: 4rem`));
            // expect(container.querySelector('#contract-calendar')).toMatchSnapshot();
        });
    });
});
