import { fireEvent, render } from '@test-utils';
import React from 'react';
import { Chip } from './Chip';

describe('Chip of MultiSelect component', () => {
    it('should call onClear on click of cross icon', () => {
        const onClearMock = jest.fn(),
            { container } = render(<Chip value="two" label={2} onClear={onClearMock} />);
        fireEvent.click(container.querySelector('svg'));
        expect(onClearMock).toHaveBeenCalledWith('two');
    });

    it('should not call onClear if the chip is disabled', () => {
        const onClearMock = jest.fn(),
            { container } = render(<Chip value="two" label={2} disabled={true} onClear={onClearMock} />);
        fireEvent.click(container.querySelector('svg'));
        expect(onClearMock).not.toHaveBeenCalled();
    });
});
