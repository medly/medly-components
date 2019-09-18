import { TestUtils } from '@medly-components/utils';
import React, { useState } from 'react';
import DatePicker from './DatePicker';

const DummmyComponent = ({ disabled, placeholder }: { disabled: boolean; placeholder?: string }) => {
    const [date, setDate] = useState(null);
    return (
        <DatePicker
            value={date}
            onChange={setDate}
            disabled={disabled}
            label="Start Date"
            labelPosition="left"
            required
            placeholder={placeholder}
        />
    );
};

describe('DatePicker component', () => {
    const { container } = TestUtils.render(<DummmyComponent disabled={false} />);
    it('should render correctly', () => {
        expect(container).toMatchSnapshot();
    });
});
