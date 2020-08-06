import { fireEvent, render } from '@test-utils';
import React from 'react';
import Options from './Options';

describe('MultiSelect Options', () => {
    const options = [
        { label: 'option1', value: 'option 1' },
        { label: 'option2', value: 'option 2' }
    ];

    it('should un-check one of the option when clear of chip is clicked', () => {
        const opOptionClickMock = jest.fn();
        const { getByTestId } = render(
            <Options options={options} values={[{ label: 'option1', value: 'option 1' }]} onOptionClick={opOptionClickMock} />
        );
        fireEvent.click(getByTestId('option 1'));
        expect(opOptionClickMock).toHaveBeenCalledWith([]);
    });
});
