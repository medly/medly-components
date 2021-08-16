import { render, screen } from '@test-utils';
import { fireEvent } from '@testing-library/dom';
import { ReactElement } from 'react';
import * as stories from './useKeyPress.stories';

describe('useKeyPress hook', () => {
    const renderDummyComponent = (component: ReactElement) => {
        render(component);
    };

    it('should handle single key press event', () => {
        renderDummyComponent(stories.Basic());
        fireEvent.keyPress(window, { key: 'ArrowUp' });
        expect(screen.getByTestId('counter')).toBe(1);
    });
});
