import { Text } from '@medly-components/core';
import { useKeyPress } from '@medly-components/utils';
import { fireEvent, render, screen } from '@test-utils';
import { FCC } from 'react';

const DummyComponent: FCC = () => {
    const arrowUpPressed = useKeyPress('ArrowUp'),
        isShiftCPressed = useKeyPress(['Shift', 'C']);
    return (
        <div>
            {arrowUpPressed && <Text>ArrowUp</Text>}
            {isShiftCPressed && <Text>Shift + C</Text>}
        </div>
    );
};

describe('useKeyPress hook', () => {
    it('should handle single key press event', () => {
        const { container } = render(<DummyComponent />);
        fireEvent.keyDown(container, { key: 'ArrowUp' });
        expect(screen.getByText('ArrowUp')).toBeInTheDocument();
    });

    it('should handle multiple key press event', () => {
        const { container } = render(<DummyComponent />);
        fireEvent.keyDown(container, { key: 'Shift' });
        fireEvent.keyDown(container, { key: 'C' });
        expect(screen.getByText('Shift + C')).toBeInTheDocument();
    });
});
