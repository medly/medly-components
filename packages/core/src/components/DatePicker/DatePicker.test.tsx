import { TestUtils } from '@medly-components/utils';
import React from 'react';
import { CALENDAR_MONTHS } from '../Calendar/constants';
import { getMonthAndDateFromDate } from '../Calendar/helper';
import { DatePicker } from './DatePicker';

describe('DatePicker component', () => {
    afterEach(TestUtils.cleanup);

    it('should render properly', () => {
        const { container } = TestUtils.render(
            <DatePicker disabled label="Start Date" value={new Date(2020, 0, 1)} onChange={jest.fn()} />
        );
        expect(container).toMatchSnapshot();
    });

    it('should show calendar on click on input', () => {
        const { container } = TestUtils.render(<DatePicker value={new Date(2020, 0, 1)} onChange={jest.fn()} />);
        TestUtils.fireEvent.click(container.querySelector('input'));
        expect(container.querySelector('#medly-datepicker-popover')).toBeVisible();
    });

    it('should hide calendar on click outside of the component', async () => {
        const { container, getByText } = TestUtils.render(
            <>
                <div>sibling</div>
                <DatePicker value={new Date(2020, 0, 1)} onChange={jest.fn()} />
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
            { getByTitle } = TestUtils.render(<DatePicker value={new Date(2020, 0, 1)} onChange={mockOnChange} />);

        TestUtils.fireEvent.click(getByTitle(dateToSelect.toDateString()));
        expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
    });
});
