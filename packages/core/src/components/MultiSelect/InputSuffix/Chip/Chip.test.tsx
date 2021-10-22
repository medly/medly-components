import { fireEvent, render, screen } from '@test-utils';
import React from 'react';
import { Chip } from './Chip';

describe('Chip of MultiSelect component', () => {
    it('should call onClear on click of cross icon', () => {
        const onClearMock = jest.fn();
        render(<Chip id="dummy" size="S" variant="outlined" label={2} onClear={onClearMock} />);
        fireEvent.click(screen.getByTitle('dummy-clear-icon'));
        expect(onClearMock).toHaveBeenCalledWith(2);
    });

    it('should not call onClear if the chip is disabled', () => {
        const onClearMock = jest.fn();
        render(<Chip id="dummy" size="M" variant="filled" label={2} disabled={true} onClear={onClearMock} />);
        fireEvent.click(screen.getByTitle('dummy-clear-icon'));
        expect(onClearMock).not.toHaveBeenCalled();
    });
});
