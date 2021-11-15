import { fireEvent, render, screen } from '@test-utils';
import { Chip } from './Chip';

describe('Chip of MultiSelect component', () => {
    it('should call onClear on click of cross icon', () => {
        const onClearMock = jest.fn();
        render(<Chip id="option1" value="two" label={2} onClear={onClearMock} />);
        fireEvent.click(screen.getByTitle('option1-clear-icon'));
        expect(onClearMock).toHaveBeenCalledWith('two');
    });

    it('should not call onClear if the chip is disabled', () => {
        const onClearMock = jest.fn();
        render(<Chip id="option2" value="two" label={2} disabled={true} onClear={onClearMock} />);
        fireEvent.click(screen.getByTitle('option2-clear-icon'));
        expect(onClearMock).not.toHaveBeenCalled();
    });
});
