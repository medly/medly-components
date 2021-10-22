import { fireEvent, render, screen } from '@test-utils';
import React from 'react';
import Options from './Options';

describe('MultiSelect Options', () => {
    const options = [
        { label: 'option1', value: 'option 1' },
        { label: 'option2', value: 'option 2' }
    ];

    it('should un-check one of the option when clear of chip is clicked', () => {
        const opOptionClickMock = jest.fn();
        render(
            <Options
                id="dummy"
                size="M"
                options={options}
                values={[{ label: 'option 1', value: 'option1' }]}
                onOptionClick={opOptionClickMock}
            />
        );
        fireEvent.click(screen.getByTitle('dummy-option1-chip-clear-icon'));
        expect(opOptionClickMock).toHaveBeenCalledWith([]);
    });
});
