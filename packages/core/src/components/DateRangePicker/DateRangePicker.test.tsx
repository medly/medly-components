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
        afterEach(cleanup);
        test.each(placements)('should render properly with %p position', (popoverPlacement: DateRangeProps['popoverPlacement']) => {
            const { container } = renderComponent({
                popoverPlacement,
                value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }
            });
            fireEvent.click(container.querySelector('svg'));
            expect(container.querySelector('#contract-calendar')).toBeVisible();
            expect(container.querySelector('#contract-calendar')).toMatchSnapshot();
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

        it('should focus the same input element on click on the calendar', () => {
            const { container, startDateInput } = renderComponent();
            fireEvent.click(container.querySelector('svg'));
            expect(container.querySelector('#contract-calendar')).toBeVisible();
            fireEvent.click(container.querySelector('#contract-calendar'));
            expect(startDateInput).toHaveFocus();
        });

        describe('navigation', () => {
            test.each([
                ['forward', 'April'],
                ['backward', 'January'],
                ['', 'February']
            ])('should render expected months on click on %s arrow', async (icon, month) => {
                const { container, findByText } = renderComponent({
                    value: { startDate: new Date(2021, 1, 1), endDate: new Date(2021, 2, 2) }
                });
                fireEvent.click(container.querySelector('svg'));
                expect(container.querySelector('#contract-calendar')).toBeVisible();
                icon && fireEvent.click(container.querySelector(`#contract-calendar-navigation-${icon}`));
                fireEvent.animationEnd(container.querySelector('#contract-calendar-months-wrapper'));
                const expectedMonth = await findByText(`${month} 2021`);
                expect(expectedMonth).toBeInTheDocument();
            });
        });
    });

    describe('on text change', () => {
        it('should call onChange with expected start date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect: any = { endDate: new Date(2020, 2, 5), startDate: new Date(2020, 1, 3) },
                { container, startDateInput, getByTitle } = renderComponent({
                    value: { startDate: new Date(2020, 1, 2), endDate: new Date(2020, 2, 5) },
                    onChange: mockOnChange
                });
            fireEvent.click(container.querySelector('svg'));
            fireEvent.focus(startDateInput);
            fireEvent.mouseOver(getByTitle(dateToSelect.startDate.toDateString()));
            fireEvent.change(startDateInput, { target: { value: '02 / 03 / 2020' } });
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });

        it('should call onChange with expected end date', () => {
            const mockOnChange = jest.fn(),
                startDate = new Date(2020, 1, 3),
                dateToSelect: any = { startDate: new Date(2020, 1, 3), endDate: new Date(2020, 1, 5) },
                { container, getByTitle, endDateInput } = renderComponent({
                    value: { startDate: startDate, endDate: null },
                    onChange: mockOnChange
                });
            fireEvent.click(container.querySelector('svg'));
            fireEvent.focus(endDateInput);
            fireEvent.mouseOver(getByTitle(dateToSelect.endDate.toDateString()));
            fireEvent.change(endDateInput, { target: { value: '02 / 05 / 2020' } });
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

    describe('date selection', () => {
        it('should swap the date if start date is greater than end date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect = new Date(2020, 1, 5),
                { container, getByTitle, startDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 0, 1), endDate: new Date(2020, 1, 1) },
                    onChange: mockOnChange,
                    fullWidth: true
                });
            fireEvent.click(container.querySelector('svg'));
            fireEvent.focus(startDateInput);
            fireEvent.mouseOver(getByTitle(dateToSelect.toDateString()));
            fireEvent.click(getByTitle(dateToSelect.toDateString()));
            expect(mockOnChange).toHaveBeenCalledWith({ endDate: dateToSelect, startDate: new Date(2020, 1, 1) });
        });

        it('should swap the date if end date is less than start date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect = new Date(2020, 1, 1),
                { container, getByTitle, endDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 1, 5), endDate: null },
                    onChange: mockOnChange,
                    fullWidth: true
                });
            fireEvent.click(container.querySelector('svg'));
            fireEvent.focus(endDateInput);
            fireEvent.mouseOver(getByTitle(dateToSelect.toDateString()));
            fireEvent.click(getByTitle(dateToSelect.toDateString()));
            expect(mockOnChange).toHaveBeenCalledWith({ endDate: new Date(2020, 1, 5), startDate: dateToSelect });
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
    });
});
