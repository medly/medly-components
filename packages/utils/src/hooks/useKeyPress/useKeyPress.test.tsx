import { fireEvent, render, screen } from '@test-utils';
import * as stories from './useKeyPress.stories';

describe('useKeyPress hook', () => {
    it('should handle single key press event', () => {
        render(stories.Basic());
        fireEvent.keyPress(window, { key: 'ArrowUp' });
        expect(screen.getByTestId('counter')).toBe(1);
    });
});
