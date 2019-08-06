import { TestUtils } from '@medly-components/utils';
import React from 'react';
import DatePicker from './DatePicker';

jest.mock('react-datepicker/dist/react-datepicker.css', () => ({}));

describe('DatePicker component', () => {
    it('should render correctly', () => {
        const { container } = TestUtils.render(<DatePicker disabled={false} label="Start Date" labelPosition="left" required />);
        expect(container).toMatchSnapshot();
    });
});
