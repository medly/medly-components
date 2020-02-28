import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { Calendar } from './Calendar';
import { CALENDAR_MONTHS } from './constants';
import { getMonthAndDateFromDate } from './helper';

describe('Calendar Component', () => {
    afterAll(cleanup);
    it('should render given date', () => {
        const date = new Date(2020, 0, 1),
            { container } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} />);

        expect(container).toHaveTextContent('Jan 2020');
        expect(container).toMatchSnapshot();
    });

    it('should render current month if date is null', () => {
        const { container } = render(<Calendar id="test-calendar" date={null} onChange={jest.fn()} />),
            { month, year } = getMonthAndDateFromDate(new Date());
        expect(container).toHaveTextContent(`${CALENDAR_MONTHS[month]} ${year}`);
    });

    it('should call onChange with expected date', () => {
        const mockOnChange = jest.fn(),
            dateToSelect = new Date(2020, 1, 1),
            { container, getByText, getByTitle } = render(<Calendar id="test-calendar" date={null} onChange={mockOnChange} />);

        fireEvent.click(container.querySelector('#test-calendar-month-selector-input'));
        fireEvent.click(getByText('Feb'));
        fireEvent.click(container.querySelector('#test-calendar-year-selector-input'));
        fireEvent.click(getByText('2020'));
        fireEvent.click(getByTitle(dateToSelect.toDateString()));
        expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
    });

    it('should render previous month on clicking left arrow when current month is other than Jan', () => {
        const date = new Date(2020, 1, 1),
            { container, getByText } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} />);

        fireEvent.click(getByText('<'));
        expect(container).toHaveTextContent(`Jan 2020`);
    });

    it('should render dec month on clicking left arrow when current month is Jan', () => {
        const date = new Date(2020, 0, 1),
            { container, getByText } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} />);

        fireEvent.click(getByText('<'));
        expect(container).toHaveTextContent(`Dec 2019`);
    });

    it('should render next month on clicking right arrow when current month is other than Dec', () => {
        const date = new Date(2020, 1, 1),
            { container, getByText } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} />);

        fireEvent.click(getByText('>'));
        expect(container).toHaveTextContent(`Mar 2020`);
    });

    it('should render Jan month on clicking right arrow when current month is Dec', () => {
        const date = new Date(2020, 11, 1),
            { container, getByText } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} />);

        fireEvent.click(getByText('>'));
        expect(container).toHaveTextContent(`Jan 2021`);
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

    it('should disable next button when year is greater than the maxDate or month is ', () => {
        const date = new Date(2020, 11, 31),
            { queryByText } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} maxYear={2020} />);

        expect(queryByText('>')).toBeDisabled();
        expect(queryByText('<')).not.toBeDisabled();
    });

    it('should disable previous button when date is less than the minDate', () => {
        const date = new Date(2020, 0, 1),
            { queryByText } = render(<Calendar id="test-calendar" date={date} onChange={jest.fn()} minYear={2020} />);

        expect(queryByText('<')).toBeDisabled();
        expect(queryByText('>')).not.toBeDisabled();
    });
});
