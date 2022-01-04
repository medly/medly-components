import { useKeyPress, useOuterClickNotifier } from '@medly-components/utils';
import { useEffect } from 'react';
import { useCheckboxGroupKeyboardNavigationProps } from './types';

export const useCheckboxGroupKeyboardNavigation = ({
    cursor,
    setCursor,
    isHovered,
    setIsHovered,
    options,
    handleSelectAllClick,
    checkboxGroupRef
}: useCheckboxGroupKeyboardNavigationProps) => {
    // TODO: Attach Checkbox ref to useKeyPress
    const isUpKeyPressed = useKeyPress('ArrowUp', false),
        isDownKeyPressed = useKeyPress('ArrowDown', false),
        isEscKeyPressed = useKeyPress('Escape', true),
        isSelectionKeyPressed = useKeyPress(' ');

    useOuterClickNotifier(() => {
        setCursor(-2);
    }, checkboxGroupRef);

    useEffect(() => {
        isHovered && options.length && isUpKeyPressed && setCursor(prevState => (prevState > -1 ? prevState - 1 : options.length - 1));
    }, [isHovered, isUpKeyPressed, options]);

    useEffect(() => {
        isHovered && options.length && isDownKeyPressed && setCursor(prevState => (prevState < options.length ? prevState + 1 : prevState));
    }, [isHovered, isDownKeyPressed, options]);

    useEffect(() => {
        isHovered && options.length && isSelectionKeyPressed && cursor === -1 && handleSelectAllClick();
    }, [isHovered, isSelectionKeyPressed, options, cursor]);

    useEffect(() => {
        isEscKeyPressed && setCursor(-2);
    }, [isEscKeyPressed]);

    useEffect(() => {
        if (isHovered && setIsHovered) {
            if (cursor > -2) setIsHovered(false);
            if ((isUpKeyPressed && cursor === -1) || cursor === options.length) {
                setIsHovered(true);
                setCursor(-2);
            }
            if ((isDownKeyPressed && cursor === -2) || cursor === options.length) setIsHovered(true);
        }
    }, [cursor, setIsHovered, isHovered, isUpKeyPressed, isDownKeyPressed]);

    return [isSelectionKeyPressed];
};
