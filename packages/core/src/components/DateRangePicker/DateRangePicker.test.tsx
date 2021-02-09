import { cleanup, fireEvent, render, waitFor } from '@test-utils';
import React, { useState } from 'react';
import { placements } from '../Popover/Popover.stories';
import { DateRangePicker } from './DateRangePicker';
import { DateRangeProps, DateRangeType } from './types';

const DummyComponent = ({ value, ...restProps }: Omit<DateRangeProps, 'onChange'>) => {
    const [dates, setDates] = useState<DateRangeType>(value);
    return <DateRangePicker value={dates} onChange={setDates} {...restProps} />;
};

const renderComponent = (props?: any) => {
    const defaultProps: Omit<DateRangeProps, 'onChange'> = {
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
        maxSelectableDate: new Date(2022, 2, 15)
    };
    const renderUtils = render(<DummyComponent {...defaultProps} {...props} />),
        calendarIcon = renderUtils.container.querySelector('svg'),
        startDateInput = renderUtils.container.querySelector('#contract-startDate-input') as HTMLInputElement,
        endDateInput = renderUtils.container.querySelector('#contract-endDate-input') as HTMLInputElement;

    return { ...renderUtils, calendarIcon, startDateInput, endDateInput };
};

describe('DateRangePicker', () => {
    afterEach(cleanup);

    it('should render properly', () => {
        const { container, calendarIcon } = renderComponent({
            value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }
        });
        fireEvent.click(calendarIcon);
        expect(container.querySelector('#contract-calendar')).toBeVisible();
        expect(container).toMatchSnapshot();
    });

    it('should render properly with single month', () => {
        const { container, calendarIcon } = renderComponent({
            withSingleMonth: true,
            value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }
        });
        fireEvent.click(calendarIcon);
        expect(container.querySelector('#contract-calendar')).toBeVisible();
        expect(container).toMatchSnapshot();
    });

    describe('popover placement', () => {
        afterEach(cleanup);
        test.each(placements)('should render properly with %p position', (popoverPlacement: DateRangeProps['popoverPlacement']) => {
            const { container, calendarIcon } = renderComponent({
                popoverPlacement,
                value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }
            });
            fireEvent.click(calendarIcon);
            expect(container.querySelector('#contract-calendar')).toBeVisible();
            expect(container.querySelector('#contract-calendar')).toMatchSnapshot();
        });

        test.each([
            ['S', '4rem'],
            ['M', '5.6rem']
        ])('should render calendar at the right position with %s size', async (size, position) => {
            const { container, calendarIcon } = renderComponent({
                size,
                onChange: jest.fn()
            });
            fireEvent.click(calendarIcon);
            await waitFor(() => expect(container.querySelector('#contract-calendar')).toHaveStyle(`top: ${position}`));
        });
    });

    describe('calendar', () => {
        it('should show calendar on click on icon', () => {
            const { container, calendarIcon } = renderComponent();
            fireEvent.click(calendarIcon);
            expect(container.querySelector('#contract-calendar')).toBeVisible();
        });

        it('should not show calendar on click on icon if disabled prop is passed', () => {
            const { container, calendarIcon } = renderComponent({ disabled: true });
            fireEvent.click(calendarIcon);
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
            const { container, startDateInput, calendarIcon } = renderComponent();
            fireEvent.click(calendarIcon);
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
                const { container, findByText, calendarIcon } = renderComponent({
                    value: { startDate: new Date(2021, 1, 1), endDate: new Date(2021, 2, 2) }
                });
                fireEvent.click(calendarIcon);
                expect(container.querySelector('#contract-calendar')).toBeVisible();
                icon && fireEvent.click(container.querySelector(`#contract-calendar-navigation-${icon}`));
                fireEvent.animationEnd(container.querySelector('#contract-calendar-months-wrapper'));
                const expectedMonth = await findByText(`${month} 2021`);
                expect(expectedMonth).toBeInTheDocument();
            });

            it('should change month on selecting month and year from dropdown in single month calendar', () => {
                const dateToSelect = new Date(2021, 1, 1),
                    { container, calendarIcon, getByText, getByTitle } = renderComponent({
                        withSingleMonth: true,
                        value: { startDate: new Date(2020, 11, 25), endDate: null }
                    });
                fireEvent.click(calendarIcon);
                expect(container.querySelector('#contract-calendar')).toBeVisible();
                fireEvent.click(container.querySelector('#contract-calendar-month-selector-button'));
                fireEvent.click(getByText('Feb'));
                fireEvent.click(container.querySelector('#contract-calendar-year-selector-button'));
                fireEvent.click(getByText('2021'));
                expect(getByTitle(dateToSelect.toDateString())).toBeInTheDocument();
            });
        });
    });

    describe('on text change', () => {
        it('should call onChange with expected start date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect: any = { endDate: new Date(2020, 2, 5), startDate: new Date(2020, 1, 3) },
                { calendarIcon, startDateInput, getByTitle } = renderComponent({
                    value: { startDate: new Date(2020, 1, 2), endDate: new Date(2020, 2, 5) },
                    onChange: mockOnChange
                });
            fireEvent.click(calendarIcon);
            fireEvent.focus(startDateInput);
            fireEvent.mouseOver(getByTitle(dateToSelect.startDate.toDateString()));
            fireEvent.change(startDateInput, { target: { value: '02 / 03 / 2020' } });
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });

        it('should call onChange with expected end date', () => {
            const mockOnChange = jest.fn(),
                startDate = new Date(2020, 1, 3),
                dateToSelect: any = { startDate: new Date(2020, 1, 3), endDate: new Date(2020, 1, 5) },
                { calendarIcon, getByTitle, endDateInput } = renderComponent({
                    value: { startDate: startDate, endDate: null },
                    onChange: mockOnChange
                });
            fireEvent.click(calendarIcon);
            fireEvent.focus(endDateInput);
            fireEvent.mouseOver(getByTitle(dateToSelect.endDate.toDateString()));
            fireEvent.change(endDateInput, { target: { value: '02 / 05 / 2020' } });
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });

        it('should change display month on selecting startDate out of displayed months', async () => {
            const { calendarIcon, startDateInput, findByText } = renderComponent({
                value: { startDate: new Date(2020, 5, 2), endDate: null }
            });
            fireEvent.click(calendarIcon);
            fireEvent.change(startDateInput, { target: { value: '01 / 03 / 2020' } });
            const month = await findByText('January 2020');
            expect(month).toBeInTheDocument();
        });

        it('should change display month on selecting endDate out of displayed months', async () => {
            const { calendarIcon, endDateInput, findByText } = renderComponent({
                value: { startDate: null, endDate: new Date(2020, 1, 5) }
            });
            fireEvent.click(calendarIcon);
            fireEvent.change(endDateInput, { target: { value: '06 / 05 / 2020' } });
            const month = await findByText('June 2020');
            expect(month).toBeInTheDocument();
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

        it('should show error message on blur if values are empty', async () => {
            const { startDateInput, findByText } = renderComponent({
                value: { startDate: null, endDate: null },
                required: true
            });
            fireEvent.blur(startDateInput);
            const message = await findByText('Please fill in this field.');
            expect(message).toBeInTheDocument();
        });

        it('should show validator message on blur if values are empty', async () => {
            const { startDateInput, findByText } = renderComponent({
                value: { startDate: null, endDate: null },
                required: true,
                validator: ({ startDate, endDate }: DateRangeType) => !startDate && !endDate && 'Please fill start and end dates'
            });
            fireEvent.blur(startDateInput);
            const message = await findByText('Please fill start and end dates');
            expect(message).toBeInTheDocument();
        });

        it('should show error message on invalid event if input value is invalid date', async () => {
            const { startDateInput, findByText } = renderComponent({
                value: { value: { startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 1) } }
            });
            fireEvent.change(startDateInput, { target: { value: '02 / 03 / 202' } });
            fireEvent.invalid(startDateInput);
            const message = await findByText('Constraints not satisfied');
            expect(message).toBeInTheDocument();
        });

        it('should show validator message on invalid', async () => {
            const { startDateInput, endDateInput, findByText } = renderComponent({
                value: { startDate: null, endDate: null },
                required: true,
                validator: ({ startDate, endDate }: DateRangeType) => !startDate && !endDate && 'Please fill start and end dates'
            });
            fireEvent.invalid(startDateInput);
            fireEvent.invalid(endDateInput);
            const message = await findByText('Please fill start and end dates');
            expect(message).toBeInTheDocument();
        });
    });

    describe('Handlers', () => {
        it('should call onChange on selecting date', async () => {
            const mockOnChange = jest.fn(),
                initialDates = { startDate: new Date(2020, 1, 2), endDate: new Date(2020, 2, 5) },
                datesToSelect: any = { endDate: new Date(2020, 2, 5), startDate: new Date(2020, 1, 3) },
                { endDateInput, calendarIcon, startDateInput, getByTitle } = renderComponent({
                    value: initialDates,
                    onChange: mockOnChange
                });
            fireEvent.click(calendarIcon);
            fireEvent.click(getByTitle(datesToSelect.startDate.toDateString()));
            expect(mockOnChange).toHaveBeenCalledWith({ endDate: initialDates.endDate, startDate: datesToSelect.startDate });
            await waitFor(() => expect(endDateInput).toHaveFocus());
            fireEvent.click(getByTitle(datesToSelect.endDate.toDateString()));
            expect(mockOnChange).toHaveBeenLastCalledWith({ startDate: initialDates.startDate, endDate: datesToSelect.endDate });
            await waitFor(() => expect(startDateInput).toHaveFocus());
        });

        it('should call focus and blur handlers if passed', async () => {
            const mockOnFocus = jest.fn(),
                mockOnChange = jest.fn(),
                mockOnBlur = jest.fn(),
                { calendarIcon, startDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 1) },
                    onChange: mockOnChange,
                    onFocus: mockOnFocus,
                    onBlur: mockOnBlur
                });
            fireEvent.click(calendarIcon);
            expect(mockOnFocus).toHaveBeenCalled();
            fireEvent.blur(startDateInput);
            await waitFor(() => expect(mockOnBlur).toHaveBeenCalled());
        });

        it('should call invalid handler if passed', () => {
            const mockOnInvalid = jest.fn(),
                mockOnChange = jest.fn(),
                { calendarIcon, startDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 1) },
                    onChange: mockOnChange,
                    onInvalid: mockOnInvalid,
                    required: true
                });
            fireEvent.click(calendarIcon);
            fireEvent.invalid(startDateInput);
            expect(mockOnInvalid).toHaveBeenCalled();
        });
    });

    describe('date selection', () => {
        it('should swap the date if start date is greater than end date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect = new Date(2020, 1, 5),
                { calendarIcon, getByTitle, startDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 0, 1), endDate: new Date(2020, 1, 1) },
                    onChange: mockOnChange,
                    fullWidth: true
                });
            fireEvent.click(calendarIcon);
            fireEvent.focus(startDateInput);
            fireEvent.mouseOver(getByTitle(dateToSelect.toDateString()));
            fireEvent.click(getByTitle(dateToSelect.toDateString()));
            expect(mockOnChange).toHaveBeenCalledWith({ endDate: dateToSelect, startDate: new Date(2020, 1, 1) });
        });

        it('should swap the date if end date is less than start date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect = new Date(2020, 1, 1),
                { calendarIcon, getByTitle, endDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 1, 5), endDate: null },
                    onChange: mockOnChange,
                    fullWidth: true
                });
            fireEvent.click(calendarIcon);
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
