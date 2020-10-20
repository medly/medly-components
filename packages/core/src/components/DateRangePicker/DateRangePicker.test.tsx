import { render } from '@test-utils';
import React from 'react';
import { DateRangePicker } from './DateRangePicker';

describe('DateRangePicker', () => {
    it('should render properly', () => {
        const { container } = render(
            <DateRangePicker value={{ startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }} onChange={jest.fn()} />
        );
        expect(container).toMatchSnapshot();
    });
});
