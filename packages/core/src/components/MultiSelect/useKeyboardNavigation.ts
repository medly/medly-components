import { useKeyPress } from '@medly-components/utils';
import { useEffect } from 'react';
import { UseKeyboardNavigationProps } from './types';

export const useKeyboardNavigation = ({ isParentCursorEnabled, setCursor, options, handleOuterClick, ref }: UseKeyboardNavigationProps) => {
    const isUpKeyPressed = useKeyPress('ArrowUp', false, ref),
        isDownKeyPressed = useKeyPress('ArrowDown', false, ref),
        isEscKeyPressed = useKeyPress('Escape', true, ref);

    useEffect(() => {
        isParentCursorEnabled &&
            options.length &&
            isUpKeyPressed &&
            setCursor(prevState => (prevState > 0 ? prevState - 1 : options.length - 1));
    }, [isUpKeyPressed, options, isParentCursorEnabled]);

    useEffect(() => {
        isParentCursorEnabled &&
            options.length &&
            isDownKeyPressed &&
            setCursor(prevState => (prevState < options.length - 1 ? prevState + 1 : 0));
    }, [isDownKeyPressed, options, isParentCursorEnabled]);

    useEffect(() => {
        isEscKeyPressed && handleOuterClick();
    }, [isEscKeyPressed]);
};
