import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { Calendar } from './Calendar';
import { SHORT_CALENDAR_MONTHS } from './constants';
import { getMonthAndYearFromDate } from './helper';

const getDateValues = (container: HTMLElement) => {
    const month = container.querySelector('#test-calendar-month-selector-button span').innerHTML;
    const year = container.querySelector('#test-calendar-year-selector-button span').innerHTML;
    return {
        month,
        year
    };
};

describe('Calendar Component', () => {
    afterAll(cleanup);

    it('should render given date', () => {
        const date = new Date(2020, 0, 1),
            { container } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} />);

        expect(container).toMatchSnapshot();
    });

    it('should render properly with with error state', () => {
        const date = new Date(2020, 0, 1),
            { container } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} isErrorPresent />);

        expect(container).toMatchSnapshot();
    });

    it('should render current month if date is null', () => {
        const { container } = render(<Calendar id="test-calendar" date={null} onChange={jest.fn()} />),
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

    it('should call onChange with expected date', () => {
        const mockOnChange = jest.fn(),
            dateToSelect = new Date(2021, 1, 1),
            { container, getByText, getByTitle } = render(
                <Calendar
                    id="test-calendar"
                    date={null}
                    onChange={mockOnChange}
                    minSelectableDate={new Date(2020, 0, 1)}
                    maxSelectableDate={new Date(2022, 2, 1)}
                />
            );

        fireEvent.click(container.querySelector('#test-calendar-month-selector-button'));
        fireEvent.click(getByText('Feb'));
        fireEvent.click(container.querySelector('#test-calendar-year-selector-button'));
        fireEvent.click(getByText('2021'));
        fireEvent.click(getByTitle(dateToSelect.toDateString()));
        expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
    });

    it('should render previous month on clicking left arrow when current month is other than Jan', () => {
        const date = new Date(2020, 1, 1),
            { container } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} />);
        fireEvent.click(container.querySelector('.calendar-month-navigation-go-back'));
        const { month, year } = getDateValues(container);
        expect(month).toEqual('Jan');
        expect(year).toEqual('2020');
    });

    it('should render dec month on clicking left arrow when current month is Jan', () => {
        const date = new Date(2020, 0, 1),
            { container } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} />);
        fireEvent.click(container.querySelector('.calendar-month-navigation-go-back'));
        const { month, year } = getDateValues(container);
        expect(month).toEqual('Dec');
        expect(year).toEqual('2019');
    });

    it('should render next month on clicking right arrow when current month is other than Dec', () => {
        const date = new Date(2020, 1, 1),
            { container } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} />);
        fireEvent.click(container.querySelector('.calendar-month-navigation-go-forward'));
        const { month, year } = getDateValues(container);
        expect(month).toEqual('Mar');
        expect(year).toEqual('2020');
    });

    it('should render Jan month on clicking right arrow when current month is Dec', () => {
        const date = new Date(2020, 11, 1),
            { container } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} />);
        fireEvent.click(container.querySelector('.calendar-month-navigation-go-forward'));
        const { month, year } = getDateValues(container);
        expect(month).toEqual('Jan');
        expect(year).toEqual('2021');
    });

    it('should render 29 days in feb month in leap year', () => {
        const date = new Date(2020, 1, 1),
            { container, getByTitle } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} />);

        expect(container).toContainElement(getByTitle('Sat Feb 29 2020'));
    });

    it('should render 28 days in feb month in non leap year', () => {
        const date = new Date(2021, 1, 1),
            { queryByText } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} />);

        expect(queryByText('29')).toBeNull();
    });

    it('should disable dates which are are out of range ', () => {
        const date = new Date(2020, 11, 15),
            { getByTitle, container } = render(
                <Calendar
                    id="test-calendar"
                    date={date}
                    onChange={jest.fn()}
                    minSelectableDate={new Date(2020, 11, 10)}
                    maxSelectableDate={new Date(2020, 11, 20)}
                />
            );

        expect(getByTitle('Wed Dec 09 2020')).toBeDisabled();
        expect(getByTitle('Mon Dec 21 2020')).toBeDisabled();
        expect(container.querySelector('.calendar-month-navigation-go-back')).toBeDisabled();
        expect(container.querySelector('.calendar-month-navigation-go-forward')).toBeDisabled();
        expect(getByTitle('Tue Dec 15 2020')).not.toBeDisabled();
    });

    it('should change month to first non disable month on changing year if selected month is disabled in the newly selected year', () => {
        const date = new Date(2020, 11, 15),
            { getByText, container } = render(
                <Calendar
                    id="test-calendar"
                    date={date}
                    onChange={jest.fn()}
                    minSelectableDate={new Date(2020, 11, 10)}
                    maxSelectableDate={new Date(2021, 3, 20)}
                />
            );
        fireEvent.click(container.querySelector('#test-calendar-year-selector-button'));
        fireEvent.click(getByText('2021'));
        const { month, year } = getDateValues(container);
        expect(month).toEqual('Jan');
        expect(year).toEqual('2021');
    });

    it('should non change month on changing year if that month is non disable in the newly selected year', () => {
        const date = new Date(2020, 11, 15),
            { getByText, container } = render(
                <Calendar
                    id="test-calendar"
                    date={date}
                    onChange={jest.fn()}
                    minSelectableDate={new Date(2020, 11, 10)}
                    maxSelectableDate={new Date(2021, 11, 20)}
                />
            );

        fireEvent.click(container.querySelector('#test-calendar-year-selector-button'));
        fireEvent.click(getByText('2021'));
        const { month, year } = getDateValues(container);
        expect(month).toEqual('Dec');
        expect(year).toEqual('2021');
    });
});
