import { cleanup, fireEvent, render, screen } from '@test-utils';
import { Calendar } from './Calendar';
import { SHORT_CALENDAR_MONTHS } from './constants';
import { getMonthAndYearFromDate } from './helper';

const getDateValues = (container: HTMLElement) => {
    const month = container.querySelector('#test-calendar-month-selector-button span')?.innerHTML;
    const year = container.querySelector('#test-calendar-year-selector-button span')?.innerHTML;
    return {
        month,
        year
    };
};

describe('Calendar Component', () => {
    afterAll(cleanup);

    const selectableDateRange = {
        minSelectableDate: new Date(1901, 0, 1),
        maxSelectableDate: new Date(2100, 11, 1)
    };

    it('should render given date', () => {
        const date = new Date(2020, 0, 1),
            { container } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} {...selectableDateRange} />);

        expect(container).toMatchSnapshot();
    });

    it('should render properly with with error state', () => {
        const date = new Date(2020, 0, 1),
            { container } = render(
                <Calendar id="test-calendar" date={date} onChange={jest.fn()} isErrorPresent {...selectableDateRange} />
            );

        expect(container).toMatchSnapshot();
    });

    it('should render current month if date is null', () => {
        const { container } = render(<Calendar id="test-calendar" date={null} onChange={jest.fn()} {...selectableDateRange} />),
            { month, year } = getMonthAndYearFromDate(new Date());
        const { month: monthInDOM, year: yearInDOM } = getDateValues(container);
        expect(monthInDOM).toEqual(`${SHORT_CALENDAR_MONTHS[month]}`);
        expect(yearInDOM).toEqual(year.toString());
    });

    it('should render min selectable date if current month is greater than max date and date is null', async () => {
        const { container } = render(
                <Calendar
                    id="test-calendar"
                    date={null}
                    onChange={jest.fn()}
                    maxSelectableDate={new Date(1902, 11, 31)}
                    minSelectableDate={new Date(1901, 0, 1)}
                />
            ),
            { month, year } = getMonthAndYearFromDate(new Date(1901, 0, 1));
        const { month: monthInDOM, year: yearInDOM } = getDateValues(container);
        expect(monthInDOM).toEqual(`${SHORT_CALENDAR_MONTHS[month]}`);
        expect(yearInDOM).toEqual(year.toString());
    });

    it('should render default year and month in dropdown if provided', async () => {
        const { container } = render(
            <Calendar
                id="test-calendar"
                date={null}
                onChange={jest.fn()}
                defaultMonth={2}
                defaultYear={2005}
                minSelectableDate={new Date(1901, 0, 1)}
                maxSelectableDate={new Date(2022, 2, 1)}
            />
        );
        const { month: monthInDOM, year: yearInDOM } = getDateValues(container);
        expect(monthInDOM).toEqual(`${SHORT_CALENDAR_MONTHS[2]}`);
        expect(yearInDOM).toEqual('2005');
    });

    it('should call onChange with expected date', () => {
        const mockOnChange = jest.fn(),
            dateToSelect = new Date(2021, 1, 1);
        render(
            <Calendar
                id="test-calendar"
                date={new Date(2020, 11, 25)}
                onChange={mockOnChange}
                minSelectableDate={new Date(2020, 0, 1)}
                maxSelectableDate={new Date(2022, 2, 1)}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: 'Dec' }));
        fireEvent.click(screen.getByText('Feb'));
        fireEvent.click(screen.getByRole('button', { name: '2020' }));
        fireEvent.click(screen.getByText('2021'));
        fireEvent.click(screen.getByTitle(dateToSelect.toDateString()));
        expect(mockOnChange.mock.calls[0][0]).toEqual(dateToSelect);
    });

    it('should render previous month on clicking left arrow when current month is other than Jan', () => {
        const date = new Date(2020, 1, 1),
            { container } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} {...selectableDateRange} />);
        fireEvent.click(screen.getByTitle('test-calendar-navigation-backward-icon'));
        const { month, year } = getDateValues(container);
        expect(month).toEqual('Jan');
        expect(year).toEqual('2020');
    });

    it('should render dec month on clicking left arrow when current month is Jan', () => {
        const date = new Date(2020, 0, 1),
            { container } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} {...selectableDateRange} />);
        fireEvent.click(screen.getByTitle('test-calendar-navigation-backward-icon'));
        const { month, year } = getDateValues(container);
        expect(month).toEqual('Dec');
        expect(year).toEqual('2019');
    });

    it('should render next month on clicking right arrow when current month is other than Dec', () => {
        const date = new Date(2020, 1, 1),
            { container } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} {...selectableDateRange} />);
        fireEvent.click(screen.getByTitle('test-calendar-navigation-forward-icon'));
        const { month, year } = getDateValues(container);
        expect(month).toEqual('Mar');
        expect(year).toEqual('2020');
    });

    it('should render Jan month on clicking right arrow when current month is Dec', () => {
        const date = new Date(2020, 11, 1),
            { container } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} {...selectableDateRange} />);
        fireEvent.click(screen.getByTitle('test-calendar-navigation-forward-icon'));
        const { month, year } = getDateValues(container);
        expect(month).toEqual('Jan');
        expect(year).toEqual('2021');
    });

    it('should render 29 days in feb month in leap year', () => {
        const date = new Date(2020, 1, 1),
            { container } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} {...selectableDateRange} />);

        expect(container).toContainElement(screen.getByTitle('Sat Feb 29 2020'));
    });

    it('should render 28 days in feb month in non leap year', () => {
        const date = new Date(2021, 1, 1);
        render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} {...selectableDateRange} />);

        expect(screen.queryByText('29')).not.toBeInTheDocument();
    });

    it('should disable dates which are are out of range', () => {
        const date = new Date(2020, 11, 15);
        render(
            <Calendar
                id="test-calendar"
                date={date}
                onChange={jest.fn()}
                minSelectableDate={new Date(2020, 11, 10)}
                maxSelectableDate={new Date(2020, 11, 20)}
            />
        );

        expect(screen.getByTitle('Wed Dec 09 2020')).toBeDisabled();
        expect(screen.getByTitle('Mon Dec 21 2020')).toBeDisabled();
        expect(screen.getByTitle('test-calendar-navigation-backward-icon').closest('button')).toBeDisabled();
        expect(screen.getByTitle('test-calendar-navigation-forward-icon').closest('button')).toBeDisabled();
        expect(screen.getByTitle('Tue Dec 15 2020')).toBeEnabled();
    });

    it('should change month to first non disable month on changing year if selected month is disabled in the newly selected year', () => {
        const date = new Date(2020, 11, 15),
            { container } = render(
                <Calendar
                    id="test-calendar"
                    date={date}
                    onChange={jest.fn()}
                    minSelectableDate={new Date(2020, 11, 10)}
                    maxSelectableDate={new Date(2021, 3, 20)}
                />
            );
        fireEvent.click(screen.getByRole('button', { name: '2020' }));
        fireEvent.click(screen.getByText('2021'));
        const { month, year } = getDateValues(container);
        expect(month).toEqual('Jan');
        expect(year).toEqual('2021');
    });

    it('should non change month on changing year if that month is non disable in the newly selected year', () => {
        const date = new Date(2020, 11, 15),
            { container } = render(
                <Calendar
                    id="test-calendar"
                    date={date}
                    onChange={jest.fn()}
                    minSelectableDate={new Date(2020, 11, 10)}
                    maxSelectableDate={new Date(2021, 11, 20)}
                />
            );

        fireEvent.click(screen.getByRole('button', { name: '2020' }));
        fireEvent.click(screen.getByText('2021'));
        const { month, year } = getDateValues(container);
        expect(month).toEqual('Dec');
        expect(year).toEqual('2021');
    });

    it('should call onClose on click on close icon', () => {
        const onClose = jest.fn();
        render(
            <Calendar
                id="test-calendar"
                date={new Date(2020, 11, 15)}
                onChange={jest.fn()}
                onClose={onClose}
                minSelectableDate={new Date(2020, 11, 10)}
                maxSelectableDate={new Date(2021, 11, 20)}
            />
        );
        fireEvent.click(screen.getByTitle('test-calendar-close-icon'));
        expect(onClose).toHaveBeenCalled();
    });
});
