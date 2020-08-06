import { fireEvent, render } from '@test-utils';
import React from 'react';
import { Chip } from './Chip';

describe('Chip of MultiSelect component', () => {
    it('should call onClear on click of cross icon', () => {
        const onClearMock = jest.fn();
        const { getByTestId } = render(<Chip label={2} onClear={onClearMock} />);
        fireEvent.click(getByTestId('selected-chip'));
        expect(onClearMock).toHaveBeenCalledWith(2);
    });

    it('should not call onClear if the chip is disabled', () => {
        const onClearMock = jest.fn();
        const { getByTestId } = render(<Chip label={2} disabled={true} onClear={onClearMock} />);
        fireEvent.click(getByTestId('selected-chip'));
        expect(onClearMock).not.toHaveBeenCalled();
    });
});
