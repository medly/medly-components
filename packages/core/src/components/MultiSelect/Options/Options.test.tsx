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
        const { container } = render(
            <Options id="dummy" options={options} values={[{ label: 'option 1', value: 'option1' }]} onOptionClick={opOptionClickMock} />
        );
        fireEvent.click(container.querySelector('#dummy-option1-chip-clear'));
        expect(opOptionClickMock).toHaveBeenCalledWith([]);
    });
});
