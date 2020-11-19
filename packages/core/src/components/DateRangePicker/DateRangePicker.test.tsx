import { cleanup, fireEvent, render, waitFor } from '@test-utils';
import React from 'react';
import { placements } from '../Popover/Popover.stories';
import { DateRangePicker } from './DateRangePicker';
import { DateRangeProps } from './types';

const renderComponent = (props?: any) => {
    const defaultProps: DateRangeProps = {
        value: { startDate: null, endDate: null },
        displayFormat: 'MM/dd/yyyy',
        id: 'contract',
        required: false,
        startDateLabel: 'From',
        endDateLabel: 'To',
        size: 'M',
        popoverPlacement: 'bottom-start',
        variant: 'filled',
        fullWidth: false,
        disabled: false,
        minSelectableDate: new Date(2020, 1, 1),
        maxSelectableDate: new Date(2022, 2, 15),
        onChange: jest.fn()
    };
    const renderUtils = render(<DateRangePicker {...defaultProps} {...props} />),
        startDateInput = renderUtils.container.querySelector('#contract-startDate-input') as HTMLInputElement,
        endDateInput = renderUtils.container.querySelector('#contract-endDate-input') as HTMLInputElement;

    return { ...renderUtils, startDateInput, endDateInput };
};

describe('DateRangePicker', () => {
    afterEach(cleanup);
    it('should render properly', () => {
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

        it('should not show calendar on click on icon if disabled prop is passed', () => {
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
                        onChange={jest.fn()}
                    />
                </>
            );
            fireEvent.click(container.querySelector('svg'));
            expect(container.querySelector('#contract-calendar')).toBeVisible();
            fireEvent.click(getByText('Click Here'));
            expect(container.querySelector('#contract-calendar')).toBeNull();
        });
    });
    describe('on text change', () => {
        it('should call onChange with expected start date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect = { endDate: new Date(2020, 2, 5), startDate: new Date(2020, 2, 2) },
                { startDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 1, 2), endDate: new Date(2020, 2, 5) },
                    onChange: mockOnChange
                });
            fireEvent.change(startDateInput, { target: { value: '03 / 02 / 2020' } });
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });
        it('should call onChange with expected end date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect = { endDate: new Date(2020, 2, 2), startDate: new Date(2020, 1, 2) },
                { endDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 1, 2), endDate: new Date(2020, 2, 5) },
                    onChange: mockOnChange
                });
            fireEvent.change(endDateInput, { target: { value: '03 / 02 / 2020' } });
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });
        it('should call onChange with null if typed start date is invalid', async () => {
            const mockOnChange = jest.fn(),
                { startDateInput } = renderComponent({
                    onChange: mockOnChange
                });
            fireEvent.change(startDateInput, { target: { value: '01 / 02' } });
            expect(mockOnChange).toHaveBeenCalledTimes(0);
        });
        it('should call onChange with null if typed end date is invalid', async () => {
            const mockOnChange = jest.fn(),
                { endDateInput } = renderComponent({ onChange: mockOnChange });
            fireEvent.change(endDateInput, { target: { value: '01 / 02' } });
            expect(mockOnChange).toHaveBeenCalledTimes(0);
        });
    });
    describe('error messages', () => {
        it('should return error message if FROM date entered is incomplete', async () => {
            const { startDateInput, getByText } = renderComponent({ required: true });
            fireEvent.change(startDateInput, { target: { value: '04/31' } });
            fireEvent.blur(startDateInput);
            await waitFor(() => expect(getByText('Enter valid date')).toBeInTheDocument());
        });

        it('should return error message if TO date entered is incomplete', async () => {
            const { endDateInput, getByText } = renderComponent({ required: true });
            fireEvent.change(endDateInput, { target: { value: '04/31' } });
            fireEvent.blur(endDateInput);
            await waitFor(() => expect(getByText('Enter valid date')).toBeInTheDocument());
        });
    });
    describe('Handlers', () => {
        it('should call onChange on selecting date', async () => {
            const mockOnChange = jest.fn(),
                currentYear = new Date().getFullYear(),
                currentMonth = new Date().getMonth(),
                currentDay = new Date().getDay(),
                dateToSelect = {
                    startDate: new Date(currentYear, currentMonth, currentDay),
                    endDate: new Date(currentYear, currentMonth + 1, currentDay)
                },
                { container, getByTitle, startDateInput, endDateInput } = renderComponent({
                    onChange: mockOnChange
                });
            fireEvent.click(container.querySelector('svg'));
            fireEvent.click(getByTitle(dateToSelect.startDate.toDateString()));
            expect(mockOnChange).toHaveBeenCalledWith({ endDate: null, startDate: dateToSelect.startDate });
            await waitFor(() => expect(endDateInput).toHaveFocus());
            fireEvent.click(getByTitle(dateToSelect.endDate.toDateString()));
            expect(mockOnChange).toHaveBeenLastCalledWith({ startDate: null, endDate: dateToSelect.endDate });
            await waitFor(() => expect(startDateInput).toHaveFocus());
        });

        it('should call focus and blur handlers if passed', () => {
            const mockOnFocus = jest.fn(),
                mockOnChange = jest.fn(),
                mockOnBlur = jest.fn(),
                { container, startDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 1) },
                    onChange: mockOnChange,
                    onFocus: mockOnFocus,
                    onBlur: mockOnBlur
                });
            fireEvent.click(container.querySelector('svg'));
            expect(mockOnFocus).toHaveBeenCalled();
            fireEvent.blur(startDateInput);
            expect(mockOnBlur).toHaveBeenCalled();
        });

        it('should call invalid handler if passed', () => {
            const mockOnInvalid = jest.fn(),
                mockOnChange = jest.fn(),
                { container, startDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 1) },
                    onChange: mockOnChange,
                    onInvalid: mockOnInvalid
                });
            fireEvent.click(container.querySelector('svg'));
            fireEvent.invalid(startDateInput);
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

        test.each([
            ['S', '4rem'],
            ['M', '5.6rem']
        ])('should render calendar at the right position with %s size', async (size, position) => {
            const { container } = renderComponent({
                size,
                onChange: jest.fn()
            });
            fireEvent.click(container.querySelector('svg'));
            await waitFor(() => expect(container.querySelector('#contract-calendar')).toHaveStyle(`top: ${position}`));
        });
    });
});
