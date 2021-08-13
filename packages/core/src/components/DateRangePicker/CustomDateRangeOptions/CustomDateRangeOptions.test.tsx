import { render } from '@test-utils';
import React from 'react';
import CustomDateRangeOptions from '.';
import { CustomDateRangeOptions as SelectOptions } from '../DateRangePicker.stories';

describe('CustomDateRangeOptions', () => {
    it('should render properly ', () => {
        const { container } = render(
            <CustomDateRangeOptions
                id="contract-custom-date-range-options"
                size="S"
                variant="outlined"
                options={SelectOptions}
                placement="top"
                onOptionClick={jest.fn()}
            />
        );

        expect(container.querySelector('#contract-custom-date-range-options')).toMatchSnapshot();
    });
});
