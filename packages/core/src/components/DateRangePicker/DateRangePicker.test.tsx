import { useMediaQuery } from '@medly-components/utils';
import { cleanup, fireEvent, render, screen, waitFor } from '@test-utils';
import { useState } from 'react';
import { placements } from '../Popover/Popover.stories';
import { DateRangePicker } from './DateRangePicker';
import { CustomDateRangeOptions } from './DateRangePicker.stories';
import { DateRangeProps, DateRangeType } from './types';

jest.mock('@medly-components/utils', () => ({
    ...(jest.requireActual('@medly-components/utils') as any),
    useMediaQuery: jest.fn()
}));

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
        maxSelectableDate: new Date(2022, 2, 15),
        showDecorators: true,
        customDateRangeOptions: []
    };
    const utils = render(
            <>
                <DummyComponent {...defaultProps} {...props} />
                <span>Outer span</span>
            </>
        ),
        startDateInput = screen.getByRole('textbox', { name: 'From' }),
        endDateInput = screen.getByRole('textbox', { name: 'To' });

    return { ...utils, startDateInput, endDateInput };
};

describe('DateRangePicker', () => {
    beforeEach(() => {
        (useMediaQuery as jest.Mock).mockReturnValue(false);
    });

    const customDateRangeOptionsPopoverSelector = '#contract-custom-date-range-options';

    it('should render properly', () => {
        const { container } = renderComponent({
            value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }
        });
        fireEvent.click(screen.getByTitle('contract-calendar-icon'));
        expect(container.querySelector('#contract-calendar')).toBeVisible();
        expect(container).toMatchSnapshot();
    });

    it('should render properly with single month', () => {
        const { container } = renderComponent({
            withSingleMonth: true,
            value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }
        });
        fireEvent.click(screen.getByTitle('contract-calendar-icon'));
        expect(container.querySelector('#contract-calendar')).toBeVisible();
        expect(container).toMatchSnapshot();
    });

    it('should render properly with single month for mobile screen', () => {
        (useMediaQuery as jest.Mock).mockReturnValue(true);
        const { container } = renderComponent({
            value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }
        });
        fireEvent.click(screen.getByTitle('contract-calendar-icon'));
        expect(container.querySelector('#contract-calendar')).toBeVisible();
        expect(container).toMatchSnapshot();
    });

    it('should close the popover on click on close icon', () => {
        const { container } = renderComponent({
            withSingleMonth: true,
            value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }
        });
        fireEvent.click(screen.getByTitle('contract-calendar-icon'));
        expect(container.querySelector('#contract-calendar')).toBeVisible();
        fireEvent.click(screen.getByTitle('contract-calendar-close-icon'));
        expect(container.querySelector('#contract-calendar')).toBeNull();
    });

    describe('popover placement', () => {
        afterEach(cleanup);

        test.each(placements)('should render properly with %p position', (popoverPlacement: DateRangeProps['popoverPlacement']) => {
            const { container } = renderComponent({
                popoverPlacement,
                value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }
            });
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
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
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            await waitFor(() => expect(container.querySelector('#contract-calendar')).toHaveStyle(`top: ${position}`));
        });
    });

    describe('calendar', () => {
        it('should show calendar on click on icon', () => {
            const { container } = renderComponent();
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            expect(container.querySelector('#contract-calendar')).toBeVisible();
        });

        it('should not show calendar on click on icon if disabled prop is passed', () => {
            const { container } = renderComponent({ disabled: true });
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            expect(container.querySelector('#contract-calendar')).toBeNull();
        });

        it('should hide calendar on click outside of the component', async () => {
            const { container } = render(
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
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            expect(container.querySelector('#contract-calendar')).toBeVisible();
            fireEvent.click(screen.getByText('Click Here'));
            expect(container.querySelector('#contract-calendar')).toBeNull();
        });

        it('should focus the same input element on click on the calendar', () => {
            const { container, startDateInput } = renderComponent();
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            expect(container.querySelector('#contract-calendar')).toBeVisible();
            fireEvent.click(container.querySelector('#contract-calendar') as HTMLDivElement);
            expect(startDateInput).toHaveFocus();
        });

        describe('navigation', () => {
            test.each([
                ['forward', 'April'],
                ['backward', 'January'],
                ['', 'February']
            ])('should render expected months on click on %s arrow', async (icon, month) => {
                const { container } = renderComponent({
                    value: { startDate: new Date(2021, 1, 1), endDate: new Date(2021, 2, 2) }
                });
                fireEvent.click(screen.getByTitle('contract-calendar-icon'));
                expect(container.querySelector('#contract-calendar')).toBeVisible();
                icon && fireEvent.click(screen.getByTitle(`contract-calendar-navigation-${icon}-icon`));
                fireEvent.animationEnd(container.querySelector('#contract-calendar-months-wrapper') as HTMLDivElement);
                const expectedMonth = await screen.findByText(`${month} 2021`);
                expect(expectedMonth).toBeInTheDocument();
            });

            it('should change month on selecting month and year from dropdown in single month calendar', () => {
                const dateToSelect = new Date(2021, 1, 1),
                    { container } = renderComponent({
                        withSingleMonth: true,
                        value: { startDate: new Date(2020, 11, 25), endDate: null }
                    });
                fireEvent.click(screen.getByTitle('contract-calendar-icon'));
                expect(container.querySelector('#contract-calendar')).toBeVisible();
                fireEvent.click(screen.getByRole('button', { name: 'Dec' }));
                fireEvent.click(screen.getByText('Feb'));
                fireEvent.click(screen.getByRole('button', { name: '2020' }));
                fireEvent.click(screen.getByText('2021'));
                expect(screen.getByTitle(dateToSelect.toDateString())).toBeInTheDocument();
            });
        });
    });

    describe('on text change', () => {
        it('should call onChange with expected start date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect: any = { endDate: new Date(2020, 2, 5), startDate: new Date(2020, 1, 3) },
                { startDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 1, 2), endDate: new Date(2020, 2, 5) },
                    onChange: mockOnChange
                });
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            fireEvent.focus(startDateInput);
            fireEvent.mouseOver(screen.getByTitle(dateToSelect.startDate.toDateString()));
            fireEvent.change(startDateInput, { target: { value: '02 / 03 / 2020' } });
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });

        it('should call onChange with expected end date', () => {
            const mockOnChange = jest.fn(),
                startDate = new Date(2020, 1, 3),
                dateToSelect: any = { startDate: new Date(2020, 1, 3), endDate: new Date(2020, 1, 5) },
                { endDateInput } = renderComponent({
                    value: { startDate, endDate: null },
                    onChange: mockOnChange
                });
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            fireEvent.focus(endDateInput);
            fireEvent.mouseOver(screen.getByTitle(dateToSelect.endDate.toDateString()));
            fireEvent.change(endDateInput, { target: { value: '02 / 05 / 2020' } });
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });

        it('should call onChange with expected start date and end date when autoSelectEndDateIn passed in', async () => {
            const mockOnChange = jest.fn(),
                dateToSelect: any = { endDate: new Date(2020, 1, 10), startDate: new Date(2020, 1, 3) },
                { startDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 1, 13), endDate: new Date(2020, 1, 5) },
                    onChange: mockOnChange,
                    autoSelectEndDateIn: 7
                });
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            fireEvent.focus(startDateInput);
            fireEvent.mouseOver(screen.getByTitle(dateToSelect.startDate.toDateString()));
            fireEvent.change(startDateInput, { target: { value: '02 / 03 / 2020' } });
            await waitFor(() => expect(mockOnChange).toHaveBeenCalledWith(dateToSelect));
        });

        it('should change display month on selecting startDate out of displayed months', async () => {
            const { startDateInput } = renderComponent({
                value: { startDate: new Date(2020, 5, 2), endDate: null }
            });
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            fireEvent.change(startDateInput, { target: { value: '01 / 03 / 2020' } });
            const month = await screen.findByText('January 2020');
            expect(month).toBeInTheDocument();
        });

        it('should change display month on selecting endDate out of displayed months', async () => {
            const { endDateInput } = renderComponent({
                value: { startDate: null, endDate: new Date(2020, 1, 5) }
            });
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            fireEvent.change(endDateInput, { target: { value: '06 / 05 / 2020' } });
            const month = await screen.findByText('June 2020');
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
            const { startDateInput } = renderComponent({ required: true });
            fireEvent.change(startDateInput, { target: { value: '04/31' } });
            fireEvent.blur(startDateInput);
            expect(await screen.findByText('Enter valid date')).toBeInTheDocument();
        });

        it('should return error message if TO date entered is incomplete', async () => {
            const { endDateInput } = renderComponent({ required: true });
            fireEvent.change(endDateInput, { target: { value: '04/31' } });
            fireEvent.blur(endDateInput);
            expect(await screen.findByText('Enter valid date')).toBeInTheDocument();
        });

        it('should show error message on outside click if values are empty', async () => {
            const { startDateInput } = renderComponent({
                value: { startDate: null, endDate: null },
                required: true
            });
            fireEvent.focus(startDateInput);
            fireEvent.click(screen.getByText('Outer span'));
            const message = await screen.findByText('Please fill in this field.');
            expect(message).toBeInTheDocument();
        });

        it('should show validator error message on outside click if values are empty', async () => {
            const { startDateInput } = renderComponent({
                value: { startDate: null, endDate: null },
                required: true,
                validator: ({ startDate, endDate }: DateRangeType) => !startDate && !endDate && 'Please fill start and end dates'
            });
            fireEvent.focus(startDateInput);
            fireEvent.click(screen.getByText('Outer span'));
            const message = await screen.findByText('Please fill start and end dates');
            expect(message).toBeInTheDocument();
        });

        it('should show error message on invalid event if input value is invalid date', async () => {
            const { startDateInput } = renderComponent({
                value: { value: { startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 1) } }
            });
            fireEvent.change(startDateInput, { target: { value: '02 / 03 / 202' } });
            fireEvent.invalid(startDateInput);
            const message = await screen.findByText('Constraints not satisfied');
            expect(message).toBeInTheDocument();
        });

        it('should show validator message on invalid', async () => {
            const { startDateInput, endDateInput } = renderComponent({
                value: { startDate: null, endDate: null },
                required: true,
                validator: ({ startDate, endDate }: DateRangeType) => !startDate && !endDate && 'Please fill start and end dates'
            });
            fireEvent.invalid(startDateInput);
            fireEvent.invalid(endDateInput);
            const message = await screen.findByText('Please fill start and end dates');
            expect(message).toBeInTheDocument();
        });

        it('should show error message when From date is before min selectable date', async () => {
            const { startDateInput } = renderComponent({
                value: { startDate: new Date(2021, 8, 8), endDate: new Date(2021, 8, 10) },
                minSelectableDate: new Date('2021-08-07T18:30:00.000Z'),
                maxSelectableDate: new Date('2021-08-13T18:30:00.000Z')
            });
            fireEvent.change(startDateInput, { target: { value: '08 / 01 / 2021' } });
            fireEvent.blur(startDateInput);
            expect(await screen.findByText('Please select date from allowed range')).toBeInTheDocument();
        });

        it('should show error message when To date is after the max selectable date', async () => {
            const { endDateInput } = renderComponent({
                value: { startDate: new Date(2021, 8, 8), endDate: new Date(2021, 8, 10) },
                minSelectableDate: new Date('2021-08-07T18:30:00.000Z'),
                maxSelectableDate: new Date('2021-08-13T18:30:00.000Z')
            });
            fireEvent.change(endDateInput, { target: { value: '08 / 15 / 2021' } });
            fireEvent.blur(endDateInput);
            expect(await screen.findByText('Please select date from allowed range')).toBeInTheDocument();
        });

        it('should show error message when From date is after the To date', async () => {
            const { startDateInput } = renderComponent({
                value: { startDate: new Date(2021, 8, 8), endDate: new Date(2021, 8, 10) }
            });
            fireEvent.change(startDateInput, { target: { value: '10 / 20 / 2021' } });
            fireEvent.blur(startDateInput);
            expect(await screen.findByText('Start date should be less than end date')).toBeInTheDocument();
        });

        it('should show error message when To date is before the From date', async () => {
            const { endDateInput } = renderComponent({
                value: { startDate: new Date(2021, 8, 8), endDate: new Date(2021, 8, 10) }
            });
            fireEvent.change(endDateInput, { target: { value: '08 / 01 / 2021' } });
            fireEvent.blur(endDateInput);
            expect(await screen.findByText('End date should be greater than start date')).toBeInTheDocument();
        });
    });

    describe('Handlers', () => {
        it('should call onChange on selecting date', async () => {
            const mockOnChange = jest.fn(),
                initialDates = { startDate: new Date(2020, 1, 2), endDate: new Date(2020, 2, 5) },
                datesToSelect: any = { endDate: new Date(2020, 2, 5), startDate: new Date(2020, 1, 3) },
                { endDateInput, startDateInput } = renderComponent({
                    value: initialDates,
                    onChange: mockOnChange
                });
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            fireEvent.click(screen.getByTitle(datesToSelect.startDate.toDateString()));
            expect(mockOnChange).toHaveBeenCalledWith({ endDate: initialDates.endDate, startDate: datesToSelect.startDate });
            await waitFor(() => expect(endDateInput).toHaveFocus());
            fireEvent.click(screen.getByTitle(datesToSelect.endDate.toDateString()));
            expect(mockOnChange).toHaveBeenLastCalledWith({ startDate: initialDates.startDate, endDate: datesToSelect.endDate });
            await waitFor(() => expect(startDateInput).toHaveFocus());
        });

        it('should auto select endDate on selecting the start date', async () => {
            const mockOnChange = jest.fn(),
                initialDates = { startDate: new Date(2020, 1, 2), endDate: new Date(2020, 1, 9) },
                datesToSelect: any = { endDate: new Date(2020, 1, 10), startDate: new Date(2020, 1, 3) };

            renderComponent({
                value: initialDates,
                onChange: mockOnChange,
                autoSelectEndDateIn: 7
            });
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            fireEvent.click(screen.getByTitle(datesToSelect.startDate.toDateString()));
            await waitFor(() =>
                expect(mockOnChange).toHaveBeenCalledWith({ endDate: datesToSelect.endDate, startDate: datesToSelect.startDate })
            );
        });

        it('should call focus and blur handlers if passed', async () => {
            const mockOnFocus = jest.fn(),
                mockOnChange = jest.fn(),
                mockOnBlur = jest.fn(),
                { startDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 1) },
                    onChange: mockOnChange,
                    onFocus: mockOnFocus,
                    onBlur: mockOnBlur
                });
            fireEvent.focus(startDateInput);
            expect(mockOnFocus).toHaveBeenCalled();
            fireEvent.blur(startDateInput);
            expect(mockOnBlur).toHaveBeenCalled();
        });

        it('should call invalid handler if passed', () => {
            const mockOnInvalid = jest.fn(),
                mockOnChange = jest.fn(),
                { startDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 1) },
                    onChange: mockOnChange,
                    onInvalid: mockOnInvalid,
                    required: true
                });
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            fireEvent.invalid(startDateInput);
            expect(mockOnInvalid).toHaveBeenCalled();
        });

        it('should call onPopupClose when calendar popup closes', () => {
            const mockOnPopupClose = jest.fn(),
                { container } = render(
                    <>
                        <p>Click Here</p>
                        <DateRangePicker
                            id="contract"
                            value={{ startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }}
                            displayFormat="MM/dd/yyyy"
                            onChange={jest.fn()}
                            onPopupClose={mockOnPopupClose}
                        />
                    </>
                );

            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            expect(container.querySelector('#contract-calendar')).toBeInTheDocument();
            fireEvent.click(screen.getByText('Click Here'));
            expect(mockOnPopupClose).toHaveBeenCalledTimes(1);
        });
    });

    it('should not call onPopupClose when calendar is hidden', () => {
        const mockOnPopupClose = jest.fn(),
            { container } = render(
                <>
                    <p>Click Here</p>
                    <DateRangePicker
                        id="contract"
                        value={{ startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }}
                        displayFormat="MM/dd/yyyy"
                        onChange={jest.fn()}
                        onPopupClose={mockOnPopupClose}
                    />
                </>
            );

        expect(container.querySelector('#contract-calendar')).toBeNull();
        fireEvent.click(screen.getByText('Click Here'));
        expect(mockOnPopupClose).not.toHaveBeenCalled();
    });

    describe('date selection', () => {
        it('should swap the date if start date is greater than end date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect = new Date(2020, 1, 5),
                { startDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 0, 1), endDate: new Date(2020, 1, 1) },
                    onChange: mockOnChange,
                    fullWidth: true
                });
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            fireEvent.focus(startDateInput);
            fireEvent.mouseOver(screen.getByTitle(dateToSelect.toDateString()));
            fireEvent.click(screen.getByTitle(dateToSelect.toDateString()));
            expect(mockOnChange).toHaveBeenCalledWith({ endDate: dateToSelect, startDate: new Date(2020, 1, 1) });
        });

        it('should swap the date if end date is less than start date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect = new Date(2020, 1, 1),
                { endDateInput } = renderComponent({
                    value: { startDate: new Date(2020, 1, 5), endDate: null },
                    onChange: mockOnChange,
                    fullWidth: true
                });
            fireEvent.click(screen.getByTitle('contract-calendar-icon'));
            fireEvent.focus(endDateInput);
            fireEvent.mouseOver(screen.getByTitle(dateToSelect.toDateString()));
            fireEvent.click(screen.getByTitle(dateToSelect.toDateString()));
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

        it('should not display the calendar Icon when showDecorators is false', () => {
            renderComponent({
                value: { startDate: null, endDate: null },
                onChange: jest.fn(),
                fullWidth: true,
                showDecorators: false
            });
            expect(screen.queryByTitle('contract-calendar-icon')).not.toBeInTheDocument();
        });
    });

    describe('Custom date range options', () => {
        beforeEach(() => {
            jest.spyOn(window.Date, 'now').mockImplementation(() => new Date(2021, 7, 11).valueOf());
        });

        afterEach(() => {
            jest.clearAllMocks();
            cleanup();
        });

        it('should render properly with custom date range options', () => {
            const { container } = renderComponent({
                value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) },
                customDateRangeOptions: CustomDateRangeOptions,
                minWidth: '38rem'
            });
            fireEvent.click(screen.getByTitle('contract-custom-date-range-options-icon'));
            expect(container.querySelector(customDateRangeOptionsPopoverSelector)).toBeVisible();
            expect(container).toMatchSnapshot();
        });

        it('should not render custom date range options when date range picker is disabled', () => {
            const { container } = renderComponent({
                value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) },
                customDateRangeOptions: CustomDateRangeOptions,
                disabled: true
            });
            fireEvent.click(screen.getByTitle('contract-custom-date-range-options-icon'));
            expect(container.querySelector(customDateRangeOptionsPopoverSelector)).not.toBeInTheDocument();
        });

        it('should hide/show custom date range options popover when clicked consecutively on custom date range icon', () => {
            const { container } = renderComponent({
                value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) },
                customDateRangeOptions: CustomDateRangeOptions
            });

            fireEvent.click(screen.getByTitle('contract-custom-date-range-options-icon'));
            expect(container.querySelector(customDateRangeOptionsPopoverSelector)).toBeVisible();

            fireEvent.click(screen.getByTitle('contract-custom-date-range-options-icon'));
            expect(container.querySelector(customDateRangeOptionsPopoverSelector)).not.toBeInTheDocument();

            fireEvent.click(screen.getByTitle('contract-custom-date-range-options-icon'));
            expect(container.querySelector(customDateRangeOptionsPopoverSelector)).toBeVisible();
        });

        test.each([
            ['Current Week', { startDate: new Date(2021, 7, 9), endDate: new Date(2021, 7, 15, 23, 59, 59, 999) }],
            ['Current Month', { startDate: new Date(2021, 7, 1), endDate: new Date(2021, 7, 31, 23, 59, 59, 999) }],
            ['Current Quarter', { startDate: new Date(2021, 6, 1), endDate: new Date(2021, 8, 30, 23, 59, 59, 999) }],
            ['Current Year', { startDate: new Date(2021, 0, 1), endDate: new Date(2021, 11, 31, 23, 59, 59, 999) }]
        ])('should render expected start and end date when %o date range option is selected', async (option, dateRange) => {
            const onChangeMock = jest.fn(),
                { container } = renderComponent({
                    value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) },
                    customDateRangeOptions: CustomDateRangeOptions,
                    onChange: onChangeMock
                });

            fireEvent.click(screen.getByTitle('contract-custom-date-range-options-icon'));
            expect(container.querySelector(customDateRangeOptionsPopoverSelector)).toBeVisible();

            fireEvent.click(screen.getByText(option));
            expect(container.querySelector(customDateRangeOptionsPopoverSelector)).not.toBeInTheDocument();
            expect(onChangeMock).toHaveBeenCalledWith(dateRange);
        });

        it('should select date min and max date range when selection falls out of range', () => {
            const onChangeMock = jest.fn(),
                minStartDate = new Date('2021-08-07T18:30:00.000Z'),
                maxEndDate = new Date('2021-08-13T18:30:00.000Z'),
                { container } = renderComponent({
                    value: { startDate: new Date('2021-08-08T18:30:00.000Z'), endDate: new Date('2021-08-09T18:30:00.000Z') },
                    customDateRangeOptions: CustomDateRangeOptions,
                    onChange: onChangeMock,
                    minSelectableDate: minStartDate,
                    maxSelectableDate: maxEndDate
                });

            fireEvent.click(screen.getByTitle('contract-custom-date-range-options-icon'));
            expect(container.querySelector(customDateRangeOptionsPopoverSelector)).toBeVisible();

            fireEvent.click(screen.getByText('Current Year'));
            expect(container.querySelector(customDateRangeOptionsPopoverSelector)).not.toBeInTheDocument();
            expect(onChangeMock).toHaveBeenCalledWith({
                startDate: minStartDate,
                endDate: new Date('2021-08-13T18:30:00.000Z')
            });
        });

        it('should show calendar and focus on start date when custom date range option is selected', async () => {
            const { container, startDateInput } = renderComponent({
                value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) },
                customDateRangeOptions: CustomDateRangeOptions
            });

            fireEvent.click(screen.getByTitle('contract-custom-date-range-options-icon'));
            expect(container.querySelector(customDateRangeOptionsPopoverSelector)).toBeVisible();

            fireEvent.click(screen.getByText('Custom'));
            expect(container.querySelector(customDateRangeOptionsPopoverSelector)).not.toBeInTheDocument();

            await waitFor(() => expect(startDateInput).toHaveFocus());
        });
    });

    describe('Custom date range options popover placement', () => {
        afterEach(cleanup);

        test.each(placements)('should render properly with %p position', (popoverPlacement: DateRangeProps['popoverPlacement']) => {
            const { container } = renderComponent({
                popoverPlacement,
                value: { startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) },
                customDateRangeOptions: CustomDateRangeOptions
            });
            fireEvent.click(screen.getByTitle('contract-custom-date-range-options-icon'));
            expect(container.querySelector(customDateRangeOptionsPopoverSelector)).toBeVisible();
            expect(container.querySelector(customDateRangeOptionsPopoverSelector)).toMatchSnapshot();
        });

        test.each([
            ['S', '4rem'],
            ['M', '5.6rem']
        ])('should render custom options at the right position with %s size', async (size, position) => {
            const { container } = renderComponent({
                size,
                onChange: jest.fn(),
                customDateRangeOptions: CustomDateRangeOptions
            });
            fireEvent.click(screen.getByTitle('contract-custom-date-range-options-icon'));
            await waitFor(() => expect(container.querySelector(customDateRangeOptionsPopoverSelector)).toHaveStyle(`top: ${position}`));
        });
    });

    describe('input element', () => {
        afterEach(cleanup);

        it('should render properly with default input attributes being passed to input elements', () => {
            renderComponent({
                autoComplete: 'off'
            });
            const inputs = screen.getAllByPlaceholderText('MM / DD / YYYY');
            inputs.forEach(input => {
                expect(input).toHaveAttribute('autoComplete', 'off');
            });
        });
    });
});
